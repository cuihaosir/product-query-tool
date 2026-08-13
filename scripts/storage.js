/**
 * 数据存储层 - LocalStorage 封装
 * 产品参数智能查询工具
 */

const STORAGE_PREFIX = 'pqt_';

/** 用户会话存储 */
const UserStorage = {
  _key: STORAGE_PREFIX + 'user',

  save(user) {
    try {
      localStorage.setItem(this._key, JSON.stringify(user));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足，请清理数据');
      }
    }
  },

  get() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || 'null');
    } catch (e) {
      return null;
    }
  },

  isLoggedIn() { return !!this.get(); },

  logout() { localStorage.removeItem(this._key); }
};

/** 产品数据存储 */
const ProductStorage = {
  _key: STORAGE_PREFIX + 'products',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || '[]');
    } catch (e) {
      return [];
    }
  },

  save(list) {
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足');
      }
    }
  },

  getById(id) {
    return this.getAll().find(item => item.id === id) || null;
  },

  getBySku(sku) {
    return this.getAll().find(item => item.sku.toLowerCase() === sku.toLowerCase()) || null;
  },

  search(keyword) {
    const kw = keyword.toLowerCase().trim();
    if (!kw) return [];
    return this.getAll().filter(p => {
      // 型号匹配
      if (p.sku.toLowerCase().includes(kw)) return true;
      // 名称匹配
      if (p.name.toLowerCase().includes(kw)) return true;
      // 参数匹配
      if (p.spec_params) {
        for (const [key, val] of Object.entries(p.spec_params)) {
          if (val.toLowerCase().includes(kw)) return true;
          if (key.toLowerCase().includes(kw)) return true;
        }
      }
      // 材质匹配
      if (p.material && p.material.toLowerCase().includes(kw)) return true;
      return false;
    });
  },

  getByCategory(categoryId) {
    return this.getAll().filter(p => p.category_id === categoryId);
  },

  initMockData() {
    if (this.getAll().length > 0) return;
    this.save(MockData.products);
  }
};

/** 价格数据存储 */
const PriceStorage = {
  _key: STORAGE_PREFIX + 'prices',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || '[]');
    } catch (e) {
      return [];
    }
  },

  save(list) {
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足');
      }
    }
  },

  getByProductId(productId) {
    return this.getAll().filter(p => p.product_id === productId);
  },

  getUnitPrice(productId, qty = 1) {
    const prices = this.getByProductId(productId);
    if (prices.length === 0) return null;
    const sorted = [...prices].sort((a, b) => a.min_qty - b.min_qty);
    let matched = sorted[0];
    for (const p of sorted) {
      if (qty >= p.min_qty) matched = p;
    }
    return matched.unit_price;
  },

  initMockData() {
    if (this.getAll().length > 0) return;
    this.save(MockData.prices);
  }
};

/** 报价单存储 */
const QuotationStorage = {
  _key: STORAGE_PREFIX + 'quotations',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || '[]');
    } catch (e) {
      return [];
    }
  },

  save(list) {
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足');
      }
    }
  },

  getById(id) {
    return this.getAll().find(q => q.id === id) || null;
  },

  add(quotation) {
    const list = this.getAll();
    list.unshift(quotation);
    this.save(list);
    return quotation;
  },

  update(id, updates) {
    const list = this.getAll();
    const idx = list.findIndex(q => q.id === id);
    if (idx === -1) return null;
    list[idx] = { ...list[idx], ...updates };
    this.save(list);
    return list[idx];
  },

  getByStatus(status) {
    return this.getAll().filter(q => q.status === status);
  },

  getStats() {
    const all = this.getAll();
    return {
      total: all.length,
      draft: all.filter(q => q.status === 'draft').length,
      sent: all.filter(q => q.status === 'sent').length,
      confirmed: all.filter(q => q.status === 'confirmed').length,
      totalAmount: all.reduce((sum, q) => sum + (q.total_amount || 0), 0)
    };
  },

  initMockData() {
    if (this.getAll().length > 0) return;
    this.save(MockData.quotations);
  }
};

/** 文档存储 */
const DocStorage = {
  _key: STORAGE_PREFIX + 'documents',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || '[]');
    } catch (e) {
      return [];
    }
  },

  save(list) {
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足');
      }
    }
  },

  getById(id) {
    return this.getAll().find(d => d.id === id) || null;
  },

  getStats() {
    const all = this.getAll();
    return {
      total: all.length,
      parsed: all.filter(d => d.status === 'parsed').length,
      parsing: all.filter(d => d.status === 'parsing').length,
      totalProducts: all.reduce((sum, d) => sum + (d.products_count || 0), 0)
    };
  },

  initMockData() {
    if (this.getAll().length > 0) return;
    this.save(MockData.documents);
  }
};

/** 查询记录存储 */
const QueryRecordStorage = {
  _key: STORAGE_PREFIX + 'query_records',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || '[]');
    } catch (e) {
      return [];
    }
  },

  save(list) {
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足');
      }
    }
  },

  add(record) {
    const list = this.getAll();
    list.unshift({
      ...record,
      id: Utils.generateId(),
      time: new Date().toISOString()
    });
    // 只保留最近200条
    if (list.length > 200) list.length = 200;
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {
      if (e.name === 'QuotaExceededError' || e.code === 22) {
        Utils.toast('存储空间不足');
      }
    }
  },

  getRecent(count = 10) {
    return this.getAll().slice(0, count);
  },

  getStats() {
    const all = this.getAll();
    const today = new Date().toISOString().slice(0, 10);
    const todayRecords = all.filter(r => r.time && r.time.slice(0, 10) === today);
    return {
      total: all.length,
      today: todayRecords.length,
      successRate: all.length > 0 ? Math.round(all.filter(r => r.result_count > 0).length / all.length * 100) : 0
    };
  },

  initMockData() {
    if (this.getAll().length > 0) return;
    this.save(MockData.queryRecords);
  }
};

/** 客户数据存储 */
const CustomerStorage = {
  _key: STORAGE_PREFIX + 'customers',

  getAll() {
    try {
      return JSON.parse(localStorage.getItem(this._key) || '[]');
    } catch (e) {
      return [];
    }
  },

  save(list) {
    try {
      localStorage.setItem(this._key, JSON.stringify(list));
    } catch (e) {}
  },

  getById(id) {
    return this.getAll().find(c => c.id === id) || null;
  },

  initMockData() {
    if (this.getAll().length > 0) return;
    this.save(MockData.customers);
  }
};

/** 初始化所有模拟数据 */
function initAllData() {
  ProductStorage.initMockData();
  PriceStorage.initMockData();
  QuotationStorage.initMockData();
  DocStorage.initMockData();
  QueryRecordStorage.initMockData();
  CustomerStorage.initMockData();
}
