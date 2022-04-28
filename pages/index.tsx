import { Container, Card, Row, Text, Grid } from "@nextui-org/react";
import VegetableTag from "../components/vegetable_tag"

const vegatables: Array<string> = ["🥔土豆", "🥕胡萝卜", "🥦花菜", "🥣白萝卜", "🥒西葫芦", "🍅番茄", "🥬芹菜", "🥒黄瓜", "🧅洋葱", "🎍莴笋", "🍄菌菇", "🍆茄子", "🍲豆腐", "🥗包菜", "🥬白菜",]

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
      <Row wrap="wrap" >
        {
          vegatables.map((value, index) => {
            return (
              // <Grid key={index} >
              //   <Card clickable bordered>
              //     <Text h6 small>{value}</Text>
              //   </Card>
              // </Grid>
              <VegetableTag key={index}>
                <Text h6 small>{value}</Text>
              </VegetableTag>
            )
          })
        }
      </Row>


    </Grid.Container >
  );
}
