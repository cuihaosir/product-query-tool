/**
 * 模拟数据 - 产品参数智能查询工具
 * 模拟制造业产品库（轴承、五金、电机配件等）
 */
const MockData = {
  /** 用户数据 */
  users: [
    { id: 'u001', name: '张伟', role: 'admin', phone: '13800138001', department: '管理层', avatar: '👨‍💼' },
    { id: 'u002', name: '李明', role: 'sales', phone: '13800138002', department: '销售部', avatar: '👨‍💻' },
    { id: 'u003', name: '王芳', role: 'sales', phone: '13800138003', department: '销售部', avatar: '👩‍💻' },
    { id: 'u004', name: '陈工', role: 'engineer', phone: '13800138004', department: '技术部', avatar: '👨‍🔧' }
  ],

  /** 产品分类 */
  categories: [
    { id: 'cat001', name: '深沟球轴承', icon: '⚙️' },
    { id: 'cat002', name: '圆锥滚子轴承', icon: '🔩' },
    { id: 'cat003', name: '电机配件', icon: '⚡' },
    { id: 'cat004', name: '五金紧固件', icon: '🔧' },
    { id: 'cat005', name: '密封件', icon: '🔘' },
    { id: 'cat006', name: '传动带', icon: '🔗' }
  ],

  /** 产品数据 */
  products: [
    {
      id: 'p001',
      sku: '6205-2RS',
      name: '深沟球轴承 6205-2RS',
      category_id: 'cat001',
      spec_params: {
        '内径': '25mm',
        '外径': '52mm',
        '厚度': '15mm',
        '重量': '0.13kg',
        '材质': 'GCr15轴承钢',
        '密封类型': '双面橡胶密封',
        '极限转速': '12000rpm',
        '基本额定动载荷': '14.8kN',
        '基本额定静载荷': '7.8kN',
        '精度等级': 'P0',
        '游隙': 'C0（标准）',
        '工作温度': '-30℃ ~ +120℃'
      },
      material: 'GCr15轴承钢',
      weight: 0.13,
      unit: '套',
      image_url: '',
      source_doc_id: 'doc001',
      source_page: 15,
      is_verified: true,
      status: 'active',
      stock: 3000,
      min_order: 100,
      delivery_days: 3,
      alternatives: ['6205-ZZ', '6205-C3', '6206-2RS'],
      created_at: '2026-01-15T08:00:00Z',
      updated_at: '2026-07-01T10:00:00Z'
    },
    {
      id: 'p002',
      sku: '6206-2RS',
      name: '深沟球轴承 6206-2RS',
      category_id: 'cat001',
      spec_params: {
        '内径': '30mm',
        '外径': '62mm',
        '厚度': '16mm',
        '重量': '0.20kg',
        '材质': 'GCr15轴承钢',
        '密封类型': '双面橡胶密封',
        '极限转速': '10000rpm',
        '基本额定动载荷': '19.5kN',
        '基本额定静载荷': '11.2kN',
        '精度等级': 'P0',
        '游隙': 'C0（标准）',
        '工作温度': '-30℃ ~ +120℃'
      },
      material: 'GCr15轴承钢',
      weight: 0.20,
      unit: '套',
      source_doc_id: 'doc001',
      source_page: 16,
      is_verified: true,
      status: 'active',
      stock: 2500,
      min_order: 100,
      delivery_days: 3,
      alternatives: ['6206-ZZ', '6206-C3', '6207-2RS'],
      created_at: '2026-01-15T08:00:00Z',
      updated_at: '2026-07-01T10:00:00Z'
    },
    {
      id: 'p003',
      sku: '6205-ZZ',
      name: '深沟球轴承 6205-ZZ',
      category_id: 'cat001',
      spec_params: {
        '内径': '25mm',
        '外径': '52mm',
        '厚度': '15mm',
        '重量': '0.13kg',
        '材质': 'GCr15轴承钢',
        '密封类型': '双面金属防尘盖',
        '极限转速': '14000rpm',
        '基本额定动载荷': '14.8kN',
        '基本额定静载荷': '7.8kN',
        '精度等级': 'P0',
        '游隙': 'C0（标准）',
        '工作温度': '-30℃ ~ +120℃'
      },
      material: 'GCr15轴承钢',
      weight: 0.13,
      unit: '套',
      source_doc_id: 'doc001',
      source_page: 15,
      is_verified: true,
      status: 'active',
      stock: 5000,
      min_order: 100,
      delivery_days: 2,
      alternatives: ['6205-2RS', '6205-C3'],
      created_at: '2026-01-15T08:00:00Z',
      updated_at: '2026-07-01T10:00:00Z'
    },
    {
      id: 'p004',
      sku: '32207',
      name: '圆锥滚子轴承 32207',
      category_id: 'cat002',
      spec_params: {
        '内径': '35mm',
        '外径': '72mm',
        '厚度': '24.25mm',
        '重量': '0.45kg',
        '材质': 'GCr15轴承钢',
        '接触角': '15°',
        '基本额定动载荷': '72.5kN',
        '基本额定静载荷': '57.5kN',
        '极限转速': '6300rpm',
        '精度等级': 'P0',
        '工作温度': '-30℃ ~ +150℃'
      },
      material: 'GCr15轴承钢',
      weight: 0.45,
      unit: '套',
      source_doc_id: 'doc002',
      source_page: 8,
      is_verified: true,
      status: 'active',
      stock: 800,
      min_order: 50,
      delivery_days: 5,
      alternatives: ['32208', '30207'],
      created_at: '2026-02-01T08:00:00Z',
      updated_at: '2026-06-15T10:00:00Z'
    },
    {
      id: 'p005',
      sku: 'YE2-90L-4',
      name: '三相异步电机 YE2-90L-4',
      category_id: 'cat003',
      spec_params: {
        '功率': '1.5kW',
        '电压': '380V',
        '频率': '50Hz',
        '极数': '4极',
        '转速': '1420rpm',
        '效率': '85.7%',
        '功率因数': '0.79',
        '防护等级': 'IP55',
        '绝缘等级': 'F级',
        '安装方式': 'B3（卧式底脚安装）',
        '轴径': '24mm',
        '中心高': '90mm',
        '重量': '18kg'
      },
      material: '铸铁外壳',
      weight: 18,
      unit: '台',
      source_doc_id: 'doc003',
      source_page: 22,
      is_verified: true,
      status: 'active',
      stock: 50,
      min_order: 1,
      delivery_days: 7,
      alternatives: ['YE2-100L-4', 'YE3-90L-4'],
      created_at: '2026-03-10T08:00:00Z',
      updated_at: '2026-05-20T10:00:00Z'
    },
    {
      id: 'p006',
      sku: 'M8x30-8.8',
      name: '内六角螺栓 M8x30 8.8级',
      category_id: 'cat004',
      spec_params: {
        '规格': 'M8x30',
        '螺纹': 'M8（粗牙1.25mm）',
        '长度': '30mm',
        '头部': '内六角圆柱头',
        '性能等级': '8.8级',
        '材质': '45#碳钢',
        '表面处理': '镀锌',
        '抗拉强度': '800MPa',
        '屈服强度': '640MPa',
        '标准': 'GB/T 70.1-2008'
      },
      material: '45#碳钢',
      weight: 0.012,
      unit: '个',
      source_doc_id: 'doc004',
      source_page: 5,
      is_verified: true,
      status: 'active',
      stock: 50000,
      min_order: 500,
      delivery_days: 2,
      alternatives: ['M8x25-8.8', 'M8x35-8.8', 'M8x30-10.9'],
      created_at: '2026-01-20T08:00:00Z',
      updated_at: '2026-07-10T10:00:00Z'
    },
    {
      id: 'p007',
      sku: 'TC-25x42x8',
      name: '骨架油封 TC 25x42x8',
      category_id: 'cat005',
      spec_params: {
        '内径': '25mm',
        '外径': '42mm',
        '厚度': '8mm',
        '类型': 'TC（双唇）',
        '材质': '丁腈橡胶（NBR）',
        '骨架': '碳钢',
        '工作温度': '-30℃ ~ +100℃',
        '介质': '润滑油、润滑脂',
        '线速度': '≤12m/s',
        '压力': '≤0.05MPa'
      },
      material: '丁腈橡胶+碳钢骨架',
      weight: 0.015,
      unit: '个',
      source_doc_id: 'doc005',
      source_page: 12,
      is_verified: false,
      status: 'active',
      stock: 10000,
      min_order: 100,
      delivery_days: 3,
      alternatives: ['TC-25x47x7', 'TC-30x42x8'],
      created_at: '2026-04-01T08:00:00Z',
      updated_at: '2026-06-01T10:00:00Z'
    },
    {
      id: 'p008',
      sku: 'A-68',
      name: '三角带 A-68',
      category_id: 'cat006',
      spec_params: {
        '型号': 'A-68',
        '类型': '普通V带',
        '截面': 'A型（宽13mm x 高8mm）',
        '节线长': '1727mm',
        '外周长': '1757mm',
        '材质': '氯丁橡胶+聚酯线绳',
        '适用温度': '-18℃ ~ +70℃',
        '适用场合': '风机、水泵、压缩机等通用传动'
      },
      material: '氯丁橡胶',
      weight: 0.15,
      unit: '根',
      source_doc_id: 'doc006',
      source_page: 3,
      is_verified: true,
      status: 'active',
      stock: 500,
      min_order: 10,
      delivery_days: 3,
      alternatives: ['A-66', 'A-70', 'AX-68'],
      created_at: '2026-02-15T08:00:00Z',
      updated_at: '2026-05-15T10:00:00Z'
    }
  ],

  /** 价格数据 */
  prices: [
    { price_id: 'pr001', product_id: 'p001', price_type: 'standard', min_qty: 1, max_qty: 99, unit_price: 5.80, cost_price: 3.20, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr002', product_id: 'p001', price_type: 'tiered', min_qty: 100, max_qty: 999, unit_price: 5.20, cost_price: 3.20, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr003', product_id: 'p001', price_type: 'tiered', min_qty: 1000, max_qty: 9999, unit_price: 4.80, cost_price: 3.20, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr004', product_id: 'p001', price_type: 'tiered', min_qty: 10000, max_qty: null, unit_price: 4.50, cost_price: 3.20, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr005', product_id: 'p002', price_type: 'standard', min_qty: 1, max_qty: 99, unit_price: 7.50, cost_price: 4.10, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr006', product_id: 'p002', price_type: 'tiered', min_qty: 100, max_qty: 999, unit_price: 6.80, cost_price: 4.10, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr007', product_id: 'p002', price_type: 'tiered', min_qty: 1000, max_qty: null, unit_price: 6.20, cost_price: 4.10, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr008', product_id: 'p003', price_type: 'standard', min_qty: 1, max_qty: 99, unit_price: 4.90, cost_price: 2.80, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr009', product_id: 'p003', price_type: 'tiered', min_qty: 100, max_qty: 999, unit_price: 4.50, cost_price: 2.80, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr010', product_id: 'p004', price_type: 'standard', min_qty: 1, max_qty: 49, unit_price: 28.50, cost_price: 16.00, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr011', product_id: 'p004', price_type: 'tiered', min_qty: 50, max_qty: 499, unit_price: 25.00, cost_price: 16.00, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr012', product_id: 'p005', price_type: 'standard', min_qty: 1, max_qty: null, unit_price: 680.00, cost_price: 420.00, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr013', product_id: 'p006', price_type: 'standard', min_qty: 1, max_qty: 499, unit_price: 0.35, cost_price: 0.15, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr014', product_id: 'p006', price_type: 'tiered', min_qty: 500, max_qty: 4999, unit_price: 0.28, cost_price: 0.15, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr015', product_id: 'p006', price_type: 'tiered', min_qty: 5000, max_qty: null, unit_price: 0.22, cost_price: 0.15, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr016', product_id: 'p007', price_type: 'standard', min_qty: 1, max_qty: 99, unit_price: 1.80, cost_price: 0.80, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr017', product_id: 'p007', price_type: 'tiered', min_qty: 100, max_qty: null, unit_price: 1.50, cost_price: 0.80, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr018', product_id: 'p008', price_type: 'standard', min_qty: 1, max_qty: 9, unit_price: 12.00, cost_price: 6.50, currency: 'CNY', tax_rate: 0.13 },
    { price_id: 'pr019', product_id: 'p008', price_type: 'tiered', min_qty: 10, max_qty: null, unit_price: 10.00, cost_price: 6.50, currency: 'CNY', tax_rate: 0.13 }
  ],

  /** 文档数据 */
  documents: [
    { id: 'doc001', name: '2026版深沟球轴承产品目录.pdf', type: 'pdf', pages: 86, size: '12.5MB', status: 'parsed', products_count: 120, upload_time: '2026-01-15T08:00:00Z', updated_at: '2026-07-01T10:00:00Z' },
    { id: 'doc002', name: '圆锥滚子轴承规格参数表.pdf', type: 'pdf', pages: 42, size: '6.8MB', status: 'parsed', products_count: 65, upload_time: '2026-02-01T08:00:00Z', updated_at: '2026-06-15T10:00:00Z' },
    { id: 'doc003', name: 'YE2系列电机选型手册.pdf', type: 'pdf', pages: 58, size: '15.2MB', status: 'parsed', products_count: 48, upload_time: '2026-03-10T08:00:00Z', updated_at: '2026-05-20T10:00:00Z' },
    { id: 'doc004', name: '紧固件价格表2026Q3.xlsx', type: 'excel', pages: null, size: '2.1MB', status: 'parsed', products_count: 350, upload_time: '2026-07-01T08:00:00Z', updated_at: '2026-07-10T10:00:00Z' },
    { id: 'doc005', name: '密封件产品手册V3.pdf', type: 'pdf', pages: 34, size: '8.5MB', status: 'parsed', products_count: 88, upload_time: '2026-04-01T08:00:00Z', updated_at: '2026-06-01T10:00:00Z' },
    { id: 'doc006', name: '传动带选型指南.pdf', type: 'pdf', pages: 28, size: '5.2MB', status: 'parsed', products_count: 42, upload_time: '2026-02-15T08:00:00Z', updated_at: '2026-05-15T10:00:00Z' },
    { id: 'doc007', name: '轴承安装与维护指南.pdf', type: 'pdf', pages: 22, size: '3.8MB', status: 'parsing', products_count: 0, upload_time: '2026-08-10T08:00:00Z', updated_at: '2026-08-10T08:00:00Z' }
  ],

  /** 客户数据 */
  customers: [
    { id: 'c001', name: '苏州精密机械有限公司', level: 'gold', contact: '赵总', phone: '13900139001' },
    { id: 'c002', name: '无锡恒达电机厂', level: 'silver', contact: '钱经理', phone: '13900139002' },
    { id: 'c003', name: '常州华鑫五金', level: 'normal', contact: '孙工', phone: '13900139003' },
    { id: 'c004', name: '宁波海天液压', level: 'gold', contact: '周总', phone: '13900139004' },
    { id: 'c005', name: '上海东方传动', level: 'silver', contact: '吴经理', phone: '13900139005' }
  ],

  /** 报价单数据 */
  quotations: [
    {
      id: 'q001',
      quotation_no: 'QT260801001',
      customer_id: 'c001',
      customer_name: '苏州精密机械有限公司',
      contact_name: '赵总',
      salesperson_id: 'u002',
      salesperson_name: '李明',
      items: [
        { product_id: 'p001', sku: '6205-2RS', name: '深沟球轴承 6205-2RS', qty: 500, unit: '套', unit_price: 5.20, amount: 2600 },
        { product_id: 'p002', sku: '6206-2RS', name: '深沟球轴承 6206-2RS', qty: 300, unit: '套', unit_price: 6.80, amount: 2040 }
      ],
      subtotal: 4640,
      tax_amount: 603.2,
      shipping_fee: 0,
      total_amount: 5243.2,
      discount_rate: 1.0,
      status: 'confirmed',
      valid_until: '2026-09-01',
      payment_terms: '月结30天',
      delivery_time: '3个工作日',
      created_at: '2026-08-01T09:30:00Z',
      sent_at: '2026-08-01T10:00:00Z'
    },
    {
      id: 'q002',
      quotation_no: 'QT260805002',
      customer_id: 'c002',
      customer_name: '无锡恒达电机厂',
      contact_name: '钱经理',
      salesperson_id: 'u002',
      salesperson_name: '李明',
      items: [
        { product_id: 'p005', sku: 'YE2-90L-4', name: '三相异步电机 YE2-90L-4', qty: 5, unit: '台', unit_price: 680, amount: 3400 }
      ],
      subtotal: 3400,
      tax_amount: 442,
      shipping_fee: 150,
      total_amount: 3992,
      discount_rate: 1.0,
      status: 'sent',
      valid_until: '2026-09-05',
      payment_terms: '预付50%，货到付余款',
      delivery_time: '7个工作日',
      created_at: '2026-08-05T14:00:00Z',
      sent_at: '2026-08-05T15:00:00Z'
    },
    {
      id: 'q003',
      quotation_no: 'QT260810003',
      customer_id: 'c003',
      customer_name: '常州华鑫五金',
      contact_name: '孙工',
      salesperson_id: 'u003',
      salesperson_name: '王芳',
      items: [
        { product_id: 'p006', sku: 'M8x30-8.8', name: '内六角螺栓 M8x30 8.8级', qty: 5000, unit: '个', unit_price: 0.22, amount: 1100 },
        { product_id: 'p007', sku: 'TC-25x42x8', name: '骨架油封 TC 25x42x8', qty: 200, unit: '个', unit_price: 1.50, amount: 300 }
      ],
      subtotal: 1400,
      tax_amount: 182,
      shipping_fee: 50,
      total_amount: 1632,
      discount_rate: 1.0,
      status: 'draft',
      valid_until: '2026-09-10',
      payment_terms: '货到付款',
      delivery_time: '2-3个工作日',
      created_at: '2026-08-10T11:00:00Z',
      sent_at: null
    }
  ],

  /** 查询记录 */
  queryRecords: [
    { id: 'qr001', query: '6205-2RS', type: 'exact', result_count: 1, user_id: 'u002', time: '2026-08-12T09:15:00Z' },
    { id: 'qr002', query: '内径25mm的轴承有哪些', type: 'natural', result_count: 3, user_id: 'u002', time: '2026-08-12T09:20:00Z' },
    { id: 'qr003', query: '6206', type: 'exact', result_count: 1, user_id: 'u003', time: '2026-08-12T10:05:00Z' },
    { id: 'qr004', query: '1.5kW电机价格', type: 'natural', result_count: 1, user_id: 'u002', time: '2026-08-12T10:30:00Z' },
    { id: 'qr005', query: 'M8螺栓', type: 'fuzzy', result_count: 3, user_id: 'u003', time: '2026-08-12T11:00:00Z' },
    { id: 'qr006', query: '32207轴承规格', type: 'exact', result_count: 1, user_id: 'u004', time: '2026-08-11T14:00:00Z' },
    { id: 'qr007', query: '油封 内径25', type: 'natural', result_count: 2, user_id: 'u002', time: '2026-08-11T15:30:00Z' },
    { id: 'qr008', query: 'A型三角带', type: 'fuzzy', result_count: 5, user_id: 'u003', time: '2026-08-11T16:00:00Z' }
  ],

  /** AI问答模拟回复 */
  qaResponses: {
    '6205': {
      answer: '6205-2RS 深沟球轴承的完整参数如下：\n\n• 内径：25mm\n• 外径：52mm\n• 厚度：15mm\n• 材质：GCr15轴承钢\n• 密封类型：双面橡胶密封\n• 极限转速：12000rpm\n• 基本额定动载荷：14.8kN\n\n当前含税单价：5.80元/套（100套以上5.20元/套）\n库存：3000套\n交期：3个工作日',
      source: '《2026版深沟球轴承产品目录》第15页',
      products: ['p001']
    },
    '内径25': {
      answer: '内径为25mm的产品有以下几个型号：\n\n1. **6205-2RS** 深沟球轴承\n   - 外径52mm / 厚度15mm / 双面橡胶密封\n   - 单价：5.80元/套\n\n2. **6205-ZZ** 深沟球轴承\n   - 外径52mm / 厚度15mm / 双面金属防尘盖\n   - 单价：4.90元/套\n\n3. **TC-25x42x8** 骨架油封\n   - 外径42mm / 厚度8mm / 丁腈橡胶\n   - 单价：1.80元/个\n\n如需选型建议，请告诉我具体应用场景。',
      source: '《2026版深沟球轴承产品目录》第15页 / 《密封件产品手册V3》第12页',
      products: ['p001', 'p003', 'p007']
    },
    '6205和6206区别': {
      answer: '6205和6206的主要区别如下：\n\n| 参数 | 6205-2RS | 6206-2RS |\n|------|----------|----------|\n| 内径 | 25mm | 30mm |\n| 外径 | 52mm | 62mm |\n| 厚度 | 15mm | 16mm |\n| 重量 | 0.13kg | 0.20kg |\n| 动载荷 | 14.8kN | 19.5kN |\n| 极限转速 | 12000rpm | 10000rpm |\n| 单价 | 5.80元 | 7.50元 |\n\n**选型建议：**\n- 轴径25mm → 选6205\n- 轴径30mm → 选6206\n- 需要更高承载 → 选6206',
      source: '《2026版深沟球轴承产品目录》第15-16页',
      products: ['p001', 'p002']
    },
    '电机': {
      answer: 'YE2-90L-4 三相异步电机参数：\n\n• 功率：1.5kW\n• 电压：380V / 频率：50Hz\n• 极数：4极\n• 转速：1420rpm\n• 效率：85.7%\n• 防护等级：IP55\n• 绝缘等级：F级\n• 安装方式：B3（卧式底脚安装）\n\n含税单价：680元/台\n库存：50台\n交期：7个工作日\n\n如需其他功率段电机，请告知具体需求。',
      source: '《YE2系列电机选型手册》第22页',
      products: ['p005']
    }
  }
};
