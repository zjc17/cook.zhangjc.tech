import { Card, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React from 'react';
import { userRecipeState } from '../../store/recipe'
import { SearchMode } from "../../store/recipe";



export default function ModTag({
  id: key,
  value,
  isSelected,
  toogleTag,
}: {
  id: SearchMode,
  value: string,
  isSelected: boolean,
  toogleTag: (name: string) => void,
}) {
  const { theme } = useTheme();
  const unSelectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: theme.colors.yellow100,
    color: theme.colors.yellow600,
  }
  const selectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: theme.colors.yellow600,
    color: theme.colors.white,
  }
  const style = isSelected ? selectedStyle : unSelectedStyle;
  const setSearchMode = userRecipeState(state => state.setSearchMode)

  return (
    <Grid key={key} css={{ margin: '2px' }}>
      <Card clickable bordered shadow={false} animated={false} onClick={(event: any) => {
        setSearchMode(key);
      }}>
        <Card.Body css={style}>
          <Text h6 weight={'normal'} css={{ color: style.color }} >{value}</Text>
        </Card.Body>
      </Card>
    </Grid>
  )
}