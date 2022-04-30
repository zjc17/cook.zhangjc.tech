import { Container, Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React, { useState } from 'react';

export default function StapleTag({
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
    backgroundColor: theme.colors.yellow100,
    color: theme.colors.yellow800,
  }
  const selectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: theme.colors.yellow600,
    color: theme.colors.white,
  }
  const style = isSelected ? selectedStyle : unSelectedStyle;

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