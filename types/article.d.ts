import { IContentDocument } from '@nuxt/content/types/content'

interface IToc {
  depth: number
  id: string
  text: string
}

export interface IArticle extends IContentDocument {
  body: Object
  date: string
  description: string
  position: number
  tags: string[]
  title: string
  toc: IToc[]
}
