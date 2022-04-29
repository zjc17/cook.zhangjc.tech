import { Container, Card, Row, Text, Grid, Spacer } from "@nextui-org/react";
import VegetableTag from "../components/vegetable_tag"
import MeatTag from "../components/meat_tag"

const vegatables: Array<string> = ["🥔土豆", "🥕胡萝卜", "🥦花菜", "🥣白萝卜", "🥒西葫芦", "🍅番茄", "🥬芹菜", "🥒黄瓜", "🧅洋葱", "🎍莴笋", "🍄菌菇", "🍆茄子", "🍲豆腐", "🥗包菜", "🥬白菜",]
const meats: Array<string> = ["🥓午餐肉", "🌭香肠", "🌭腊肠", "🐤鸡肉", "🐷猪肉", "🥚鸡蛋", "🦐虾", "🐮牛肉", "🦴骨头"]
const stapleFood: Array<string> = ["🍝面食", "🍞面包", "🍚米", "🍜方便面",]
export default function App() {
  return (
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
      <Row wrap="wrap" justify="center" align="center" > {vegatables.map((value, index) => <VegetableTag key={index} value={value} />)}</Row>
      <Spacer y={1} />
      <Row justify="center" align="center">
        <Text h4 weight="bold" css={{ opacity: 0.8 }}>
          🥩 肉肉们
        </Text>
      </Row>
      <Row wrap="wrap" justify="center" align="center" > {meats.map((value, index) => <MeatTag key={index} value={value} />)}</Row>
      <Spacer y={1} />
      <Row justify="center" align="center">
        <Text h4 weight="bold" css={{ opacity: 0.8 }}>
          🍚 主食也要一起下锅吗？（不选也行）
        </Text>
      </Row>
      <Row wrap="wrap" justify="center" align="center" > {stapleFood.map((value, index) => <MeatTag key={index} value={value} />)}</Row>
      <Spacer y={1} />


    </Grid.Container >
  );
}
