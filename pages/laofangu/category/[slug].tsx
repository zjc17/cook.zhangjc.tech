import { Text } from "@nextui-org/react"
import { LaofanguCategory, LaofanguCategoryItem } from "../../../components/types/laofangu";
import { LaofanguDish, LaofanguDishItem } from "../../../components/types/laofangu";
import AboutLayout from "../../../components/layouts/AboutLayout";
import { Row, Spacer, Grid, Card } from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import Head from "next/head";

export default function Category({ category, dishes }: StaticProps) {
  const { theme } = useTheme()
  return (
    <AboutLayout showBilibiliFooter={false}>
      <Head>
        <title>老饭骨菜谱视频合集｜{category.name}</title>
        <meta
          name="description"
          content={`是老饭骨的粉丝吗？这里有最全的菜谱视频合集！来看看${category.name}的做法吧！想在家里种菜？来看看吧！居家隔离食用手册，跟着视频学习常见食材能做哪些菜！`}
          key="desc"
        />
      </Head>
      <Row justify="center" align="center">
        <Text h3 weight="medium">老饭骨美食合集-{category.name}</Text>
      </Row>
      <Spacer style={{ height: theme.space[2].value }} />
      <Grid.Container xl css={{ backgroundColor: theme.colors.accents1.value, padding: '8px' }}>
        <Row wrap="wrap" justify="center" align="center" >
          {dishes.map((value, index) => (
            <TraditionalCard id={index} key={index} LaofanguDishItem={value} />
          ))}
        </Row>
      </Grid.Container>
    </AboutLayout>
  )
}

export async function getStaticPaths() {
  // import categoryJsonData from '../../data/laofangu_category.json'
  // import { LaofanguCategory, LaofanguCategoryItem } from "../../components/types/laofangu";
  const categoryJsonData = (await import('../../../data/laofangu_category.json')).default
  const data = categoryJsonData as LaofanguCategory
  // Get the paths we want to pre-render based on posts
  const paths = data.map((category) => ({
    params: {
      slug: category.slug,
      data: category,
    },
  }));
  // Set fallback to blocking. Now any new post added post build will SSR
  // to ensure SEO. It will then be static for all subsequent requests
  return { paths, fallback: 'blocking' };
}

export async function getStaticProps({ params }) {
  const categoryJsonData = (await import('../../../data/laofangu_category.json')).default
  const categoryData = categoryJsonData as LaofanguCategory
  const category = categoryData.find(category => category.slug === params.slug)

  const laofanguJsonData = (await import('../../../data/laofangu.json')).default
  const laofanguData = laofanguJsonData as LaofanguDish
  const dishes: LaofanguDish = laofanguData.filter(dish => dish.category.split(',').includes(category.name))
  const props: StaticProps = {
    category,
    dishes,
  }
  return {
    props: props,
  };
}

interface StaticProps {
  category: LaofanguCategoryItem
  dishes: LaofanguDish
}

function TraditionalCard({ id: key, LaofanguDishItem }: { id: string | number, LaofanguDishItem: LaofanguDishItem }) {
  return (
    <Grid key={key} style={{ padding: '4px 8px' }}>
      <a href={LaofanguDishItem.link} target='_blank' rel="noreferrer" >
        <Card clickable>
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