import { Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React from 'react';
import { RecipeItem } from "../types/recipe";
import Emoji from "../types/stuff_emoji";

export default function DishTag({
  id: key,
  recipe,
}: {
  id: string | number,
  recipe: RecipeItem,
}) {
  const { theme, type } = useTheme();
  const style: CSS = {
    backgroundColor: type === 'light' ? theme.colors.blue100.value : theme.colors.blue900.value,
    color: type === 'light' ? theme.colors.blue600.value : theme.colors.blue400.value,
  }

  return (
    <Grid key={key} css={{ margin: '2px' }} >
      <Card clickable bordered shadow={false} animated={false}>
        <Card.Body css={{ padding: '2px 8px', backgroundColor: style.backgroundColor }}>
          <a href={recipe.link} target='_blank' rel="noreferrer">
            <Row wrap="wrap" justify="flex-start">
              {recipe.stuffs.slice(0, 3).map((value, index) => <Emoji name={value} key={index} />)}
              <Text h6 weight={'normal'} css={{ color: style.color, padding: '0px 4px' }} >
                {recipe.name}
              </Text>
              {recipe.tools.map((value, index) => <Emoji key={index} name={value} color={theme.colors.foreground.value} />)}
            </Row>
          </a>
        </Card.Body>
      </Card>
    </Grid>
  )
}