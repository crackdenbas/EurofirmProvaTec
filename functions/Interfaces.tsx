export interface IProductList {
    products: IProduct[]
    total: number
    skip: number
    limit: number
}

  export interface IProduct {
    id: number
    title: string
    description: string
    price: number
    discountPercentage: number
    rating: number
    stock: number
    brand: string
    category: string
    thumbnail: string
    images: string[]
  }

  export interface IUser {
    name: string
    password ?: string
    token? : string
  }

  export interface IJsonResponse {
    success: boolean
    error?: string
    data? : IUser
  }