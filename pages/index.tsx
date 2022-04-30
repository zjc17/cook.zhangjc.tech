import { Container, Card, Row, Text, Grid, Spacer, Button, useTheme } from "@nextui-org/react";
import IngredientSelection from '../components/IngredientSelection'
import ResetPrompt from '../components/ResetPrompt'


export default function App() {

  const { theme } = useTheme();

  return (
    <Container xl>

      <Spacer y={2}></Spacer>

      <ResetPrompt />

      <IngredientSelection />

      <Container css={{ backgroundColor: theme.colors.gray100, padding: '8px' }}>
        <Row justify="center" align="center">
          <Text h3 weight="normal">🍲 来看看组合出的菜谱吧！</Text>
        </Row>
      </Container>
    </Container>
  );
}
