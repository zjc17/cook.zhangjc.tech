import React, { useState } from "react";
import { Card, Row, Text, Grid, Spacer, useTheme } from "@nextui-org/react";
import AboutLayout from "../../components/layouts/AboutLayout";
import jsonData from '../../data/laofangu.json'
import { LaofanguDish, LaofanguDishItem } from "../../components/types/laofangu";
import { Icon } from '@iconify/react';
import plantPot from '@iconify/icons-charm/plant-pot';
import categoryJsonData from '../../data/laofangu_category.json'
import { LaofanguCategory, LaofanguCategoryItem } from "../../components/types/laofangu";
import Link from "next/link";
import Head from "next/head";

export default function Categories() {
  const [data, setData] = useState(categoryJsonData)
  const laofanguCategory = data as LaofanguCategory
  const { theme, type } = useTheme()
  return (
    <AboutLayout maxWidth="1200px" showBilibiliFooter={false} menuActivePath='/laofangu'>
      <Head>
        <title>老饭骨菜谱视频合集～</title>
        <meta
          name="description"
          content="是老饭骨的粉丝吗？这里有最全的菜谱视频合集！想在家里种菜？来看看吧！居家隔离食用手册，跟着视频学习常见食材能做哪些菜！"
          key="desc"
        />
      </Head>
      <Row justify="center" align="center">
        <Text h3 weight="medium">老饭骨美食合集</Text>
      </Row>
      <Spacer y={2} />
      <Grid.Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
        <Row wrap="wrap" justify="center" align="center" >
          {laofanguCategory.map((value, index) => (
            <CategoryCard key={index} categoryItem={value} />
          ))}
        </Row>
      </Grid.Container>
    </AboutLayout>
  )
}

function CategoryCard({ categoryItem }: { categoryItem: LaofanguCategoryItem }) {
  const { theme, type } = useTheme()
  return (
    <Grid key={categoryItem.slug} style={{ padding: '4px 8px' }} css={{ width: '25%', p: 0, minWidth: 280, aspectRatio: 1.5 }}>
      <Link href={`/laofangu/category/${categoryItem.slug}`}>
        <Card cover clickable >
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
      </Link>
    </Grid>
  )
}
