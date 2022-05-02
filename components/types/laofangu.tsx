export interface LaofanguDishItem {
  link: string
  name: string
  category: string
}

export type LaofanguDish = LaofanguDishItem[]

export interface LaofanguCategoryItem {
  name: string
  slug: string
  cover: string
}

export type LaofanguCategory = LaofanguCategoryItem[]
