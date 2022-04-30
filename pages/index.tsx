import { Container, Card, Row, Text, Grid, Spacer, Button, useTheme } from "@nextui-org/react";
import IngredientSelection from '../components/IngredientSelection'
import ResetPrompt from '../components/ResetPrompt'
import { DishResult } from "../components/DishResult";
// const recipe: Recipe = recipeData as Recipe



export default function App() {

  return (
    <Container xl>

      <Spacer y={2} />

      <ResetPrompt />

      <IngredientSelection />
      <Spacer y={2} />
      <DishResult />
    </Container>
  );
}
