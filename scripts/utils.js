/**
 * 工具函数库 - 产品参数智能查询工具
 */
const Utils = {
  /** 显示 Toast 提示 */
  toast(msg, duration = 2000) {
    const existing = document.querySelector('.toast');
    if (existing) existing.remove();
    const el = document.createElement('div');
    el.className = 'toast';
    el.textContent = msg;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), duration);
  },

  /** 生成随机ID */
  generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 6);
  },

  /** 生成报价单号 */
  generateQuoteNo() {
    const date = new Date();
    const prefix = 'QT';
    const dateStr = date.getFullYear().toString().slice(2) +
      String(date.getMonth() + 1).padStart(2, '0') +
      String(date.getDate()).padStart(2, '0');
    const seq = String(Math.floor(Math.random() * 9999)).padStart(4, '0');
    return `${prefix}${dateStr}${seq}`;
  },

  /** 格式化日期 */
  formatDate(dateStr, fmt = 'YYYY-MM-DD') {
    const d = new Date(dateStr);
    const map = {
      'YYYY': d.getFullYear(),
      'MM': String(d.getMonth() + 1).padStart(2, '0'),
      'DD': String(d.getDate()).padStart(2, '0'),
      'HH': String(d.getHours()).padStart(2, '0'),
      'mm': String(d.getMinutes()).padStart(2, '0'),
      'ss': String(d.getSeconds()).padStart(2, '0')
    };
    let result = fmt;
    for (const [k, v] of Object.entries(map)) {
      result = result.replace(k, v);
    }
    return result;
  },

  /** 格式化金额 */
  formatMoney(amount, currency = '¥') {
    if (amount === null || amount === undefined) return '-';
    return currency + Number(amount).toLocaleString('zh-CN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  },

  /** 格式化数字 */
  formatNumber(num) {
    if (num === null || num === undefined) return '-';
    return Number(num).toLocaleString('zh-CN');
  },

  /** 相对时间 */
  relativeTime(dateStr) {
    const now = new Date();
    const d = new Date(dateStr);
    const diff = now - d;
    const minutes = Math.floor(diff / 60000);
    const hours = Math.floor(diff / 3600000);
    const days = Math.floor(diff / 86400000);
    if (minutes < 1) return '刚刚';
    if (minutes < 60) return `${minutes}分钟前`;
    if (hours < 24) return `${hours}小时前`;
    if (days < 30) return `${days}天前`;
    return this.formatDate(dateStr);
  },

  /** 获取URL参数 */
  getParam(key) {
    return new URLSearchParams(location.search).get(key);
  },

  /** 截断文本 */
  truncate(str, maxLen = 20) {
    if (!str) return '';
    return str.length > maxLen ? str.slice(0, maxLen) + '...' : str;
  },

  /** 防抖 */
  debounce(fn, delay = 300) {
    let timer = null;
    return function(...args) {
      clearTimeout(timer);
      timer = setTimeout(() => fn.apply(this, args), delay);
    };
  },

  /** 计算阶梯价格 */
  calcTieredPrice(prices, qty) {
    if (!prices || prices.length === 0) return null;
    const sorted = [...prices].sort((a, b) => a.min_qty - b.min_qty);
    let matched = sorted[0];
    for (const p of sorted) {
      if (qty >= p.min_qty) matched = p;
    }
    return matched.unit_price;
  },

  /** 状态文本映射 */
  statusText(status) {
    const map = {
      'draft': '草稿',
      'sent': '已发送',
      'confirmed': '已确认',
      'rejected': '已拒绝',
      'expired': '已过期',
      'ordered': '已成交',
      'active': '有效',
      'inactive': '停用',
      'discontinued': '停产',
      'pending': '待审批',
      'approved': '已审批'
    };
    return map[status] || status;
  },

  /** 状态标签CSS类 */
  statusClass(status) {
    const map = {
      'draft': 'tag-draft',
      'sent': 'tag-sent',
      'confirmed': 'tag-confirmed',
      'rejected': 'tag-rejected',
      'expired': 'tag-inactive',
      'ordered': 'tag-active',
      'active': 'tag-active',
      'inactive': 'tag-inactive',
      'pending': 'tag-draft',
      'approved': 'tag-confirmed'
    };
    return map[status] || '';
  }
};
