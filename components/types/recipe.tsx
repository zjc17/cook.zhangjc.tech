export type Difficulty = '简单' | '普通' | '困难'

export interface RecipeItem {
    name: string
    link: string
    stuffs?: string[]
    emojis?: string[]
    difficulty?: Difficulty | ''
    tags?: string[]
    methods?: ('炒' | '煎' | '烘' | '炸')[]
    tools?: string[]
}

export type Recipe = RecipeItem[]
