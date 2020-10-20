// 父组件Data类型
export interface Data {
  show: boolean
  tabs: Array<TabsItem>
  banners: Array<string>
  recommend: Array<RecommendItem>
}

export interface TabsItem {
  id: number
  title: string
}

export interface RecommendItem {
  id: number
  name: string
  image: string
  price: number
}
