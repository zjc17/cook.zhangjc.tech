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
  const { theme, type } = useTheme();
  const unSelectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: type === 'light' ? '#fee2e2' : '#fca5a533',
    color: type === 'light' ? '#991b1b' : '#fecaca',
  }
  const selectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: '#ef4444e6',
    color: theme.colors.white,
  }
  var style = isSelected ? selectedStyle : unSelectedStyle;

  return (
    <Grid key={key} css={{margin: '2px'}}>
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