import { Card, Row, Text, Grid, CSS, useTheme } from "@nextui-org/react";
import React from 'react';
import Emoji from "../types/stuff_emoji";
// import { Icon } from '@iconify/react';
// import type { IconifyIcon } from '@iconify/types';
// import carrotIcon from '@iconify/icons-noto/carrot';

export default function VegetableTag({
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
    backgroundColor: type === 'light' ? theme.colors.green100.value : theme.colors.green900.value,
    color: type === 'light' ? theme.colors.green900.value : theme.colors.green100.value,
  }
  const selectedStyle: CSS = {
    padding: '2px 8px',
    backgroundColor: theme.colors.green500.value,
    color: theme.colors.white.value,
  }
  const style = isSelected ? selectedStyle : unSelectedStyle;


  return (
    <Grid key={key} css={{ margin: '2px' }}>
      <Card clickable bordered shadow={false} animated={false} onClick={(event: any) => {
        toogleTag(value);
      }}>
        <Card.Body css={style}>
          <Row>
            <Emoji name={value} />
            {/* <Icon icon={carrotIcon} /> */}
            <Text h6 weight={'normal'} css={{ color: style.color, paddingLeft: '4px' }} >{value}</Text>
          </Row>
        </Card.Body>
      </Card>
    </Grid>
  )
}