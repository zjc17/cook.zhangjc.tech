import { Container, Card, Row, Text, Grid, Spacer } from "@nextui-org/react";
import { Icon } from '@iconify/react';
import potMixOutline from '@iconify/icons-mdi/pot-mix-outline';
import potSteamOutline from '@iconify/icons-mdi/pot-steam-outline';
import { userRecipeState } from '../store/recipe'


function ResetButton(props) {
    const stuffs: Set<string> = userRecipeState(state => state.stuffs)
    const reset: () => void = userRecipeState(state => state.reset)
    if (stuffs.size) {
        return <Icon icon={potSteamOutline} width="44" height="44" onClick={reset} />
    } else {
        return <Icon icon={potMixOutline} width="44" height="44" onClick={reset} />
    }
}


export default function ResetPrompt() {

    const stuffs: Set<string> = userRecipeState(state => state.stuffs)

    return (
        <Container>
            <Row justify="center" align="center">
                <ResetButton />
            </Row>
            <Row justify="center" align="center">
                <Text h5 weight="normal">好的，今天我们来做菜！</Text>
            </Row>
        </Container>
    )
}