import { Container, Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React, { useState } from 'react';
import { userRecipeState } from '../../store/recipe'
import { RecipeItem } from "../types/recipe";

export default function DishTag({
  id: key,
  recipe,
}: {
  id: string | number,
  recipe: RecipeItem,
}) {
  const { theme } = useTheme();
  return (
    <Grid key={key} css={{margin: '2px'}} >
      <Card clickable bordered shadow={false} animated={false}>
        <Card.Body css={{padding: '2px 8px', backgroundColor: theme.colors.blue100}}>
          <a href={recipe.link} target='_blank'><Text h6 weight={'normal'} css={{ color: theme.colors.blue700 }} >{recipe.name}</Text></a>
        </Card.Body>
      </Card>
    </Grid>
  )
}