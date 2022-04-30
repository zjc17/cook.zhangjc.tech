import recipeData from '../../data/recipe.json'

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

export function LoadRecipe(): Recipe {
    interface RecipeRawData {
        name: string,
        stuff: string,
        link: string,
        difficulty: string,
        tags: string,
        methods: string,
        tools: string,
    }
    const jsonData = recipeData as RecipeRawData[]
    const recipe: Recipe = jsonData.map(value => {
        // console.log(value)
        const recipeItem: RecipeItem = {
            name: value.name,
            link: value.link,
            stuffs: value.stuff.split(','),
            emojis: [],
            difficulty: value.difficulty as Difficulty,
            tags: value.tags?.split(','),
            methods: value.methods?.split(',') as ('炒' | '煎' | '烘' | '炸')[],
            tools: value.tools.split(','),
        }
        return recipeItem
    })
    return recipe
}
