import { Container, Row, Text, Spacer, useTheme } from "@nextui-org/react";
import IngredientSelection from '../components/IngredientSelection'
import ResetPrompt from '../components/ResetPrompt'
import { DishResult } from "../components/DishResult";
import { BaseFooter } from "../components/BaseFooter";
import { Menu } from "../components/Menu";
import Head from "next/head";
// const recipe: Recipe = recipeData as Recipe



export default function App() {
  const { theme } = useTheme();
  return (
    <Container xl>
      <Head>
        <title>居家隔离食用手册</title>
        <meta
          name="description"
          content="居家隔离食用手册，跟着视频学习常见食材能做哪些菜！想在家里种菜？来看看吧！是老饭骨的粉丝吗？这里有最全的菜谱视频合集！"
          key="desc"
        />
      </Head>
      <Spacer style={{ height: theme.space[1].value }} />
      <Menu activePath="/" />
      <Spacer style={{ height: theme.space[1].value }} />
      <ResetPrompt />
      <Row justify="center" align="center">
        <Text h1 size={theme.fontSizes.base.value} weight="normal" as={'h1'}>好的，今天我们来做菜！</Text>
      </Row>
      <Spacer style={{ height: theme.space[2].value }} />
      <IngredientSelection />
      <Spacer style={{ height: theme.space[1].value }} />
      <DishResult />

      <Row justify="center" align="center">
        <a href="https://docs.qq.com/sheet/DZUpJS0tQZm1YYWlt?referrer=1&tab=mwn1v5" target='_blank' rel="noreferrer" >
          <Text h5 weight='thin' css={{
            color: theme.colors.blue500,
            margin: '8px',
            textDecorationLine: 'underline',
            textDecorationStyle: 'dotted'
          }}>更多囤货、水培攻略：隔离食用手册大全</Text>
        </a>
      </Row>

      <BaseFooter />
    </Container>
  );
}
