export type TDetailArticleResponse = {
    code: number
    status: string
    message: string
    data: TDetailArticleData
  }

export type TDetailArticleSlug = {
  slug: string
}
  
export type TDetailArticleData = {
    data: any
    id: string
    title: string
    content: string
    thumbnail: string
    slug: any
    views: number
    created_at: string
    author: Author
    category: string
    tags: string[]
  }
  
  export type Author = {
    full_name: string
  }
  