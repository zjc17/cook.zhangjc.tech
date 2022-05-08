import { Container, Row, Text } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import potMixOutline from '@iconify/icons-mdi/pot-mix-outline';
import potSteamOutline from '@iconify/icons-mdi/pot-steam-outline';
import { userRecipeState } from '../store/recipe'


function ResetButton(props) {
  const stuffs: Set<string> = userRecipeState(state => state.stuffs)
  const reset: () => void = userRecipeState(state => state.reset)
  if (!stuffs || stuffs.size === 0) {
    return <Icon icon={potMixOutline} width="44" height="44" onClick={reset} />
  }
  return <Icon icon={potSteamOutline} width="44" height="44" onClick={reset} />
}

export default function ResetPrompt() {
  return (
    <Container>
      <Row justify="center" align="center" style={{ height: '44px' }}>
        <ResetButton />
      </Row>
    </Container>
  )
}