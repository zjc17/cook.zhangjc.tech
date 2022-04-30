import { Container, Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React, { useState } from 'react';
import { userRecipeState } from '../../store/recipe'

export default function MeatTag({
  id: key,
  value,
  isSelected,
  toogleTag,
}: {
  id: string | number,
  value: string,
  isSelected: boolean,
  toogleTag: (name: string) => void,
}) {
  const { theme } = useTheme();
  const unSelectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: '#fee2e2',
    color: '#991b1b',
  }
  const selectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: '#ef4444e6',
    color: theme.colors.white,
  }
  var style = isSelected ? selectedStyle : unSelectedStyle;

  return (
    <Grid key={key} >
      <Card clickable bordered shadow={false} animated={false} onClick={(event: any) => {
        toogleTag(value);
      }}>
        <Card.Body css={style}>
          <Text h6 weight={'normal'} css={{ color: style.color }} >{value}</Text>
        </Card.Body>
      </Card>
    </Grid>
  )
}