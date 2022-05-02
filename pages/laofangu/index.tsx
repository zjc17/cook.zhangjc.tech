import React, { useState } from "react";
import { Card, Row, Text, Grid, Spacer, useTheme } from "@nextui-org/react";
import AboutLayout from "../../components/layouts/AboutLayout";
import jsonData from '../../data/laofangu.json'
import { LaofanguDish, LaofanguDishItem } from "../../components/types/laofangu";
import { Icon } from '@iconify/react';
import plantPot from '@iconify/icons-charm/plant-pot';

function TraditionalCard({ LaofanguDishItem }: { LaofanguDishItem: LaofanguDishItem }) {
  return (
    <Grid css={{ padding: '4px 8px' }}>
      <a href={LaofanguDishItem.link} target='_blank'>
        <Card>
          <Card.Body css={{ padding: '4px 8px' }}>
            <Text h6 weight='normal' >
              {LaofanguDishItem.name}
            </Text>
          </Card.Body>
        </Card>
      </a>
    </Grid>
  )
}

export default function Traditional() {
  const [data, setData] = useState(jsonData);
  const laofanguDishes = data as LaofanguDish
  const { theme, type } = useTheme()
  return (
    <AboutLayout>
      {/* <Row justify="center" align="center" >
        <Icon icon={plantPot} width="44" height="44" color={type === 'light' ? theme.colors.green600.value : theme.colors.green400.value} />
      </Row> */}
      <Row justify="center" align="center">
        <Text h5 weight="normal">老饭骨美食合集</Text>
      </Row>
      <Spacer y={2} />
      <Grid.Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
      {/* </Grid.Container>
      <Grid.Container xl> */}
        <Row wrap="wrap" justify="center" align="center" >
          {laofanguDishes.map((value, index) => (
            <TraditionalCard LaofanguDishItem={value} />
          ))}
        </Row>
      </Grid.Container>
    </AboutLayout>
  )
}
