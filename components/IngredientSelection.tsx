import { Container, Row, Text, Grid, Spacer } from "@nextui-org/react";
import VegetableTag from "../components/tags/vegetable_tag"
import MeatTag from "../components/tags/meat_tag"
import StapleTag from '../components/tags/staple_tag'
import ToolTag from '../components/tags/tool_tag'
import { userRecipeState } from '../store/recipe'
import { useTheme } from "@nextui-org/react";

const vegatables: Array<string> = ["土豆", "胡萝卜", "花菜", "白萝卜", "西葫芦", "番茄", "芹菜", "黄瓜", "洋葱", "莴笋", "菌菇", "茄子", "豆腐", "包菜", "白菜",]
const meats: Array<string> = ["午餐肉", "香肠", "腊肠", "鸡肉", "猪肉", "鸡蛋", "虾", "牛肉", "骨头"]
const stapleFood: Array<string> = ["面食", "面包", "米", "方便面",]
const tools: Array<string> = ["烤箱", "空气炸锅", "微波炉", "电饭煲", "一口能炒又能煮的大锅",]

export default function IngredientSelection() {
    // const toggleTool = userRecipeState(state => state.toggleTool)
    const tool: string = userRecipeState(state => state.tool);
    const toogleTool: (name: string) => void = userRecipeState(state => state.toggleTool);
    const toogleStuff: (name: string) => void = userRecipeState(state => state.toggleStuff);
    const stuffs: Set<string> = userRecipeState(state => state.stuffs);
    const {theme} = useTheme()

    return <Container>
        <Grid.Container xl >
            <Row justify="center" align="center">
                <Text h3 weight="bold">
                    🥘 先选一下食材
                </Text>
            </Row>
            <Row justify="center" align="center">
                <Text h4 weight="bold" css={{ opacity: 0.8 }}>
                    🥬 菜菜们
                </Text>
            </Row>
            <Row wrap="wrap" justify="center" align="center" >
                {vegatables.map((value, index) =>
                    <VegetableTag id={index} key={index} value={value} isSelected={stuffs.has(value)} toogleTag={toogleStuff} />)}
            </Row>
            <Spacer style={{height: theme.space[1].value}} />
            <Row justify="center" align="center">
                <Text h4 weight="bold" css={{ opacity: 0.8 }}>
                    🥩 肉肉们
                </Text>
            </Row>
            <Row wrap="wrap" justify="center" align="center" >
                {meats.map((value, index) =>
                    <MeatTag id={index} key={index} value={value} isSelected={stuffs.has(value)} toogleTag={toogleStuff} />)}
            </Row>
            <Spacer style={{height: theme.space[1].value}} />
            <Row justify="center" align="center">
                <Text h4 weight="bold" css={{ opacity: 0.8 }}>
                    🍚 来点主食？（不选也行）
                </Text>
            </Row>
            <Row wrap="wrap" justify="center" align="center" >
                {stapleFood.map((value, index) =>
                    <StapleTag id={index} key={index} value={value} isSelected={stuffs.has(value)} toogleTag={toogleStuff} />)}
            </Row>
            <Spacer style={{height: theme.space[2].value}} />
            <Row justify="center" align="center">
                <Text h3 weight="bold" css={{ opacity: 0.8 }}>
                    🍳 再选一下厨具
                </Text>
            </Row>
            <Row wrap="wrap" justify="center" align="center" >
                {tools.map((value, index) =>
                    <ToolTag id={index} key={index} value={value} isSelected={tool === value} toogleTag={toogleTool} />)}
            </Row>
            {/* <Row>
                工具：{userRecipeState(state => state.tool)}
            </Row>
            <Row>
                食材：{Array.from(userRecipeState(state => state.stuffs)).join(',')}
            </Row>
            <Row>
                模式：{userRecipeState(state => state.searchMode)}
            </Row> */}
        </Grid.Container >
    </Container>
}