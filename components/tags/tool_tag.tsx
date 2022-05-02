import { Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React from 'react';
import Emoji from "../types/stuff_emoji";

export default function ToolTag({
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
    backgroundColor: theme.colors.accents1.value,
    color: theme.colors.accents9.value,
  }
  const selectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: theme.colors.gray500.value,
    color: theme.colors.white.value,
  }
  var style = isSelected ? selectedStyle : unSelectedStyle;
  return (
    <Grid key={key} css={{ margin: '2px' }}>
      <Card clickable bordered shadow={false} animated={false} onClick={(event: any) => {
        toogleTag(value);
      }}>
        <Card.Body css={style}>
          <Row>
            <Emoji name={value} />
            <Text h6 weight={'normal'} css={{ color: style.color, paddingLeft: '4px' }} >{value}</Text>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  )
}