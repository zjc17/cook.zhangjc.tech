import React, { useState } from "react";
import { Card, Row, Text, Grid, Spacer, useTheme } from "@nextui-org/react";
import AboutLayout from "../../components/layouts/AboutLayout";
import jsonData from '../../data/laofangu.json'
import { LaofanguDish, LaofanguDishItem } from "../../components/types/laofangu";
import { Icon } from '@iconify/react';
import plantPot from '@iconify/icons-charm/plant-pot';
import categoryJsonData from '../../data/laofangu_category.json'
import { LaofanguCategory, LaofanguCategoryItem } from "../../components/types/laofangu";

function TraditionalCard({ LaofanguDishItem }: { LaofanguDishItem: LaofanguDishItem }) {
  return (
    <Grid key={LaofanguDishItem.name} style={{ padding: '4px 8px' }}>
      <a href={LaofanguDishItem.link} target='_blank'>
        <Card>
          <Card.Body style={{ padding: '4px 8px' }}>
            <Text h6 weight='normal' >
              {LaofanguDishItem.name}
            </Text>
          </Card.Body>
        </Card>
      </a>
    </Grid>
  )
}

function CategoryCard({ categoryItem }: { categoryItem: LaofanguCategoryItem }) {
  const { theme, type } = useTheme()
  return (
    <Grid key={categoryItem.slug} style={{ padding: '4px 8px' }} css={{ width: '25%', p: 0, minWidth: 280, aspectRatio: 1.5 }}>
      <Card cover >
        <Card.Body >
          <Card.Image
            src={categoryItem.cover}
            height={200}
            width="100%"
            alt="Relaxing app background"
          />
        </Card.Body>
        <Card.Footer blur css={{
          position: "absolute",
          bgBlur: theme.colors.accents1.value,
          bottom: 0,
          zIndex: 1,
        }}>
          <Text h5 weight='semibold' >
            {categoryItem.name}
          </Text>
        </Card.Footer>
      </Card>
    </Grid>
  )
}

export default function Categories() {
  const [data, setData] = useState(categoryJsonData)
  const laofanguCategory = data as LaofanguCategory
  const { theme, type } = useTheme()
  return (
    <AboutLayout maxWidth="1200px" showBilibiliFooter={false}>
      {/* <Row justify="center" align="center" >
        <Icon icon={plantPot} width="44" height="44" color={type === 'light' ? theme.colors.green600.value : theme.colors.green400.value} />
      </Row> */}
      <Row justify="center" align="center">
        <Text h3 weight="medium">老饭骨美食合集</Text>
      </Row>
      <Spacer y={2} />
      <Grid.Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
        {/* </Grid.Container>
      <Grid.Container xl> */}
        <Row wrap="wrap" justify="center" align="center" >
          {laofanguCategory.map((value, index) => (
            <CategoryCard categoryItem={value} />
          ))}
        </Row>
      </Grid.Container>
    </AboutLayout>
  )
}

function Traditional() {
  const [data, setData] = useState(jsonData);
  const laofanguDishes = data as LaofanguDish
  const { theme, type } = useTheme()
  return (
    <AboutLayout showBilibiliFooter={false}>
      <Row justify="center" align="center">
        <Text h5 weight="normal">老饭骨美食合集</Text>
      </Row>
      <Spacer y={2} />
      <Grid.Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
        <Row wrap="wrap" justify="center" align="center" >
          {laofanguDishes.map((value, index) => (
            <TraditionalCard LaofanguDishItem={value} />
          ))}
        </Row>
      </Grid.Container>
    </AboutLayout>
  )
}
