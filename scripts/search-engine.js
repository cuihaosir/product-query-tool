/**
 * 搜索引擎 - 模拟RAG检索与问答
 * 支持精确匹配、模糊匹配、自然语言问答
 */
const SearchEngine = {
  /** 主搜索入口 */
  search(query) {
    if (!query || !query.trim()) return { type: 'empty', results: [], answer: null };
    
    const q = query.trim();
    
    // 1. 尝试精确型号匹配
    const exactMatch = this._exactSearch(q);
    if (exactMatch.length > 0) {
      return { type: 'exact', results: exactMatch, answer: null, source: this._getSource(exactMatch) };
    }

    // 2. 尝试模糊型号匹配
    const fuzzyMatch = this._fuzzySearch(q);
    if (fuzzyMatch.length > 0) {
      return { type: 'fuzzy', results: fuzzyMatch, answer: null, source: this._getSource(fuzzyMatch) };
    }

    // 3. 尝试自然语言问答
    const nlResult = this._naturalLanguageSearch(q);
    if (nlResult) {
      return nlResult;
    }

    // 4. 参数反查
    const paramMatch = this._paramSearch(q);
    if (paramMatch.length > 0) {
      return { type: 'param', results: paramMatch, answer: null, source: this._getSource(paramMatch) };
    }

    // 5. 未找到
    return { type: 'not_found', results: [], answer: '未找到与"' + q + '"相关的产品信息。\n\n建议：\n• 检查型号是否正确\n• 尝试使用更简短的关键词\n• 联系管理员补充知识库', source: null };
  },

  /** 精确搜索 - 型号完全匹配或前缀匹配 */
  _exactSearch(query) {
    const products = ProductStorage.getAll();
    const q = query.toLowerCase().replace(/[\s\-_]/g, '');
    
    return products.filter(p => {
      const sku = p.sku.toLowerCase().replace(/[\s\-_]/g, '');
      return sku === q || sku.startsWith(q) || q.startsWith(sku);
    });
  },

  /** 模糊搜索 - 包含匹配 + 编辑距离 */
  _fuzzySearch(query) {
    const products = ProductStorage.getAll();
    const q = query.toLowerCase();
    
    return products.filter(p => {
      const sku = p.sku.toLowerCase();
      const name = p.name.toLowerCase();
      // 包含匹配
      if (sku.includes(q) || name.includes(q)) return true;
      // SKU前缀匹配（去除后缀）
      const skuBase = sku.split('-')[0];
      if (skuBase.includes(q) || q.includes(skuBase)) return true;
      return false;
    });
  },

  /** 自然语言搜索 - 模拟RAG问答 */
  _naturalLanguageSearch(query) {
    const q = query.toLowerCase();
    
    // 匹配预设的问答模板
    for (const [keyword, response] of Object.entries(MockData.qaResponses)) {
      if (q.includes(keyword.toLowerCase())) {
        const products = response.products.map(id => ProductStorage.getById(id)).filter(Boolean);
        return {
          type: 'natural',
          results: products,
          answer: response.answer,
          source: response.source
        };
      }
    }

    // 基于参数关键词的语义搜索
    const products = ProductStorage.getAll();
    const matched = [];
    
    // 提取数字和单位
    const numMatches = q.match(/(\d+\.?\d*)\s*(mm|kg|kw|rpm|mpa|v|hz)/gi);
    if (numMatches) {
      for (const p of products) {
        if (!p.spec_params) continue;
        let score = 0;
        for (const val of Object.values(p.spec_params)) {
          for (const nm of numMatches) {
            if (val.toLowerCase().includes(nm.toLowerCase())) score++;
          }
        }
        if (score > 0) matched.push({ product: p, score });
      }
    }

    // 关键词匹配
    const keywords = q.split(/[\s，。？,?]+/).filter(w => w.length >= 2);
    for (const p of products) {
      let score = 0;
      const searchText = (p.name + ' ' + p.material + ' ' + Object.values(p.spec_params || {}).join(' ')).toLowerCase();
      for (const kw of keywords) {
        if (searchText.includes(kw)) score++;
      }
      if (score > 0 && !matched.find(m => m.product.id === p.id)) {
        matched.push({ product: p, score });
      }
    }

    if (matched.length > 0) {
      matched.sort((a, b) => b.score - a.score);
      const results = matched.slice(0, 5).map(m => m.product);
      return {
        type: 'natural',
        results,
        answer: this._generateAnswer(q, results),
        source: this._getSource(results)
      };
    }

    return null;
  },

  /** 参数反查 */
  _paramSearch(query) {
    const products = ProductStorage.getAll();
    const q = query.toLowerCase();
    
    return products.filter(p => {
      if (!p.spec_params) return false;
      for (const [key, val] of Object.entries(p.spec_params)) {
        if (val.toLowerCase().includes(q) || key.toLowerCase().includes(q)) return true;
      }
      if (p.material && p.material.toLowerCase().includes(q)) return true;
      return false;
    });
  },

  /** 生成自然语言回答 */
  _generateAnswer(query, products) {
    if (products.length === 0) return null;
    if (products.length === 1) {
      const p = products[0];
      const prices = PriceStorage.getByProductId(p.id);
      const basePrice = prices.length > 0 ? prices[0].unit_price : null;
      let answer = `**${p.name}** (${p.sku})\n\n`;
      answer += '主要参数：\n';
      const params = Object.entries(p.spec_params || {}).slice(0, 6);
      for (const [k, v] of params) {
        answer += `• ${k}：${v}\n`;
      }
      if (basePrice) answer += `\n含税单价：${Utils.formatMoney(basePrice)}/${p.unit}`;
      if (p.stock) answer += `\n库存：${Utils.formatNumber(p.stock)}${p.unit}`;
      if (p.delivery_days) answer += `\n交期：${p.delivery_days}个工作日`;
      return answer;
    }

    let answer = `找到 ${products.length} 个相关产品：\n\n`;
    products.forEach((p, i) => {
      const prices = PriceStorage.getByProductId(p.id);
      const basePrice = prices.length > 0 ? prices[0].unit_price : null;
      answer += `${i + 1}. **${p.sku}** ${p.name}\n`;
      if (basePrice) answer += `   单价：${Utils.formatMoney(basePrice)}/${p.unit}`;
      if (p.stock) answer += ` | 库存：${Utils.formatNumber(p.stock)}${p.unit}`;
      answer += '\n\n';
    });
    answer += '点击产品型号可查看完整参数。';
    return answer;
  },

  /** 获取来源信息 */
  _getSource(products) {
    if (!products || products.length === 0) return null;
    const docs = DocStorage.getAll();
    const sources = [];
    for (const p of products) {
      if (p.source_doc_id) {
        const doc = docs.find(d => d.id === p.source_doc_id);
        if (doc) {
          const src = `《${doc.name.replace('.pdf', '').replace('.xlsx', '')}》`;
          if (p.source_page) {
            sources.push(`${src}第${p.source_page}页`);
          } else {
            sources.push(src);
          }
        }
      }
    }
    return [...new Set(sources)].join(' / ') || null;
  },

  /** 获取搜索建议（自动补全） */
  getSuggestions(input) {
    if (!input || input.length < 1) return [];
    const products = ProductStorage.getAll();
    const q = input.toLowerCase();
    const suggestions = [];

    for (const p of products) {
      if (p.sku.toLowerCase().startsWith(q) || p.sku.toLowerCase().includes(q)) {
        suggestions.push({ text: p.sku, sub: p.name, type: 'product' });
      }
    }

    // 添加历史搜索
    const records = QueryRecordStorage.getRecent(5);
    for (const r of records) {
      if (r.query.toLowerCase().includes(q) && !suggestions.find(s => s.text === r.query)) {
        suggestions.push({ text: r.query, sub: '历史搜索', type: 'history' });
      }
    }

    return suggestions.slice(0, 8);
  }
};
