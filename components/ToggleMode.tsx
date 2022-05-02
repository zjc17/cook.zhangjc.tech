import { Row, CSS, useTheme } from "@nextui-org/react";
import { SearchMode } from "../store/recipe";
import { userRecipeState } from "../store/recipe";
import ModTag from "./tags/mode_tag";

const searchModes: {
  id: SearchMode
  name: string
}[] = [{
  id: 'loose',
  name: '模糊匹配',
}, {
  id: 'strict',
  name: '严格匹配',
}, {
  id: 'survival',
  name: '生存模式',
}]


export function ToggleMode() {
  const setSearchMode = userRecipeState(state => state.setSearchMode)
  const searchMode = userRecipeState(state => state.searchMode)
  const { theme } = useTheme();
  const style: CSS = {
    padding: '2px 8px',
    backgroundColor: theme.colors.yellow100,
    color: theme.colors.yellow800,
  }
  return (
    <Row wrap="wrap" justify="center" align="center" >
      {
        searchModes.map((value) => {
          return (
            <ModTag id={value.id} key={value.id} value={value.name} isSelected={searchMode === value.id} toogleTag={setSearchMode} />
          )
        })
      }
    </Row>
  )
}