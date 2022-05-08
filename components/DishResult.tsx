import { Container, Row, Text, useTheme } from "@nextui-org/react";
import { Recipe } from "../components/types/recipe";
import DishTag from '../components/tags/dish_tag'
import { ToggleMode } from "./ToggleMode";
import { userRecipeState } from "../store/recipe";

function Result({ recipes }: { recipes: Recipe }) {
  const searchMode = userRecipeState(state => state.searchMode)
  const tool = userRecipeState(state => state.tool)
  const curTool = tool === '一口能炒又能煮的大锅' ? '一口大锅' : tool

  const stuffs: Array<string> = Array.from(userRecipeState(state => state.stuffs))

  const displayRecipes: Recipe = function () {
    switch (searchMode) {
      case 'strict':
        return recipes.filter((item) => {
          const stuffFlag = stuffs.every(stuff => item.stuffs.includes(stuff))
          const toolFlag = item.tools?.includes(curTool)
          return curTool ? stuffFlag && toolFlag : stuffFlag
        })
      case 'loose':
        return recipes.filter((item) => {
          const stuffFlag = stuffs.some(stuff => item.stuffs.includes(stuff))
          const toolFlag = item.tools?.includes(curTool)
          // 同时存在 厨具和材料，则同时判断
          if (curTool && stuffs.length) {
            return stuffFlag && toolFlag
          } else {
            if (stuffs.length)
              return stuffFlag
            else if (curTool)
              return toolFlag
            return false
          }
        })
      case 'survival':
        return recipes.filter((item) => {
          const stuffFlag = item.stuffs.every(stuff => stuffs.includes(stuff))
          const toolFlag = item.tools?.includes(curTool)
          return curTool ? stuffFlag && toolFlag : stuffFlag
        })
    }
  }()

  if (stuffs.length === 0 && !tool) {
    return (
      <Row wrap="wrap" justify="center" align="center" >
        <Text h5 weight='normal' css={{ opacity: 0.8 }} >你要先选食材或工具哦～</Text>
      </Row>
    )
  } else {
    return (
      <Row wrap="wrap" justify="center" align="center" >
        {displayRecipes.map((value, index) =>
          <DishTag key={index} id={index} recipe={value} />)}
      </Row>
    )
  }
}

export function DishResult({ recipeItems }: { recipeItems: Recipe }) {
  const { theme } = useTheme();
  return (
    <Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
      <Row justify="center" align="center">
        <Text h3 weight="normal" >🍲 来看看组合出的菜谱吧！</Text>
      </Row>
      <ToggleMode />
      <Result recipes={recipeItems} />
    </Container>
  )
}