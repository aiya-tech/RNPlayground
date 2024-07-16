export interface Weight {
  imperial: string // 重量（英制）
  metric: string // 重量（公制）
}

export interface Height {
  imperial: string // 身高（英制）
  metric: string // 身高（公制）
}

export interface Breed {
  weight: Weight // 重量
  height: Height // 身高
  id: number // 品种ID
  name: string // 品种名称
  bred_for: string // 培育用途
  breed_group: string // 品种组
  life_span: string // 寿命
  temperament: string // 性情
  reference_image_id: string // 参考图片ID
  country_code?: string // 国家代码（可选）
}

export interface Dog {
  breeds: Breed[] // 品种信息数组
  id: string // 图片ID
  url: string // 图片URL
  width: number // 图片宽度
  height: number // 图片高度
}
