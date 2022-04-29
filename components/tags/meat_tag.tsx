import { Container, Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React, { useState } from 'react';


export default function MeatTag({
  key,
  value,
}: {
  key: string | number,
  value: string,
}) {
  const { theme } = useTheme();
  const [isSelected, setIsSelected] = useState(false);
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
  const [style, setStyle] = useState(unSelectedStyle);

  return (
    <Grid key={key} >
      <Card clickable bordered shadow={false} onClick={(event: any) => {
        setStyle(isSelected ? unSelectedStyle : selectedStyle);
        setIsSelected(!isSelected);
      }}>
        <Card.Body css={style}>
          <Text h6 weight={'normal'} css={{ color: style.color }} >{value}</Text>
        </Card.Body>
      </Card>
    </Grid>
  )
}