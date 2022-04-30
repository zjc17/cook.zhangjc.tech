import { Container, Card, Row, Text, Grid, Spacer, Button, useTheme } from "@nextui-org/react";
import { LoadRecipe, Recipe } from "../components/types/recipe";
import DishTag from '../components/tags/dish_tag'
import { ToggleMode } from "./ToggleMode";
import { userRecipeState } from "../store/recipe";
const recipes = LoadRecipe()

export function DishResult() {
    const { theme } = useTheme();
    const searchMode = userRecipeState(state => state.searchMode)
    const tool = userRecipeState(state => state.tool)

    const displayRecipes: Recipe =function (){
        const stuffs: Array<string> = Array.from(userRecipeState(state => state.stuffs))
        switch (searchMode) {
            case 'strict':
                return recipes.filter((item) => {
                    const stuffFlag = stuffs.every(stuff => item.stuffs.includes(stuff))
                    const toolFlag = item.tools?.includes(tool)
                    return tool ? stuffFlag && toolFlag : stuffFlag
                })
            case 'loose':
                return recipes.filter((item) => {
                    const stuffFlag = stuffs.some(stuff => item.stuffs.includes(stuff))
                    const toolFlag = item.tools?.includes(tool)
                    // 同时存在 厨具和材料，则同时判断
                    if (tool && stuffs.length) {
                        return stuffFlag && toolFlag
                    } else {
                        if (stuffs.length)
                            return stuffFlag
                        else if (tool)
                            return toolFlag
                        return false
                    }
                })
            case 'survival':
                return recipes.filter((item) => {
                    const stuffFlag = item.stuffs.every(stuff => stuffs.includes(stuff))
                    const toolFlag = item.tools?.includes(tool)
                    return tool ? stuffFlag && toolFlag : stuffFlag
                })
        }
    }()

    return (
        <Container xl css={{ backgroundColor: theme.colors.gray100, padding: '8px' }}>
            <Row justify="center" align="center">
                <Text h3 weight="normal">🍲 来看看组合出的菜谱吧！</Text>
            </Row>
            <ToggleMode />
            <Row wrap="wrap" justify="center" align="center" >
                {displayRecipes.map((value, index) =>
                    <DishTag id={index} recipe={value} />)}
            </Row>
        </Container>
    )
}