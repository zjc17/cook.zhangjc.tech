import { Container, Card, Row, Text, Grid, Spacer, Button, useTheme } from "@nextui-org/react";
import IngredientSelection from '../components/IngredientSelection'
import ResetPrompt from '../components/ResetPrompt'
import { DishResult } from "../components/DishResult";
import { BaseFooter } from "../components/BaseFooter";
// const recipe: Recipe = recipeData as Recipe



export default function App() {
  const { theme } = useTheme();

  return (
    <Container xl>

      <Spacer y={2} />

      <ResetPrompt />

      <IngredientSelection />
      <Spacer y={2} />
      <DishResult />

      <Row justify="center" align="center">
        <a href="https://docs.qq.com/sheet/DZUpJS0tQZm1YYWlt?referrer=1&tab=mwn1v5">
          <Text h5 weight='thin' css={{
            color: theme.colors.blue500,
            margin: '8px',
            textDecorationLine: 'underline',
            textDecorationStyle: 'dotted'
          }}>更多囤货、水培攻略：隔离食用手册大全</Text>
        </a>
      </Row>

      <BaseFooter />
    </Container>
  );
}
