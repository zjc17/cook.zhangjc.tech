import { Container, Card, Row, Text, Grid, Spacer, Button, useTheme } from "@nextui-org/react";
import { LoadRecipe } from "../components/types/recipe";
import DishTag from '../components/tags/dish_tag'

export function DishResult() {
    const { theme } = useTheme();
  const recipes = LoadRecipe()

    return (
        <Container css={{ backgroundColor: theme.colors.gray100, padding: '8px' }}>
            <Row justify="center" align="center">
                <Text h3 weight="normal">🍲 来看看组合出的菜谱吧！</Text>
            </Row>
            <Row wrap="wrap" justify="center" align="center" css={{margin: '10px', padding: '10px'}} >
                {recipes.map((value, index) =>
                    <DishTag id={index} recipe={value} />)}
            </Row>
        </Container>
    )
}