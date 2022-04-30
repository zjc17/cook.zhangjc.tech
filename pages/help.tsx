import { Container, Card, Row, Text, Grid, Spacer, Button, useTheme } from "@nextui-org/react";
import { BaseFooter } from "../components/BaseFooter";
import { Menu } from "../components/Menu";

// const recipe: Recipe = recipeData as Recipe



export default function Help() {
  const { theme } = useTheme();

  return (
    <Container xl>
      <Spacer y={1} />
      <Menu />
      <Spacer y={2} />

      <Container lg css={{ maxWidth: '900px' }}>
        <Row justify="center" align="center">
          <Text h3 >
            使用帮助
          </Text>
        </Row>
        <Text h3 css={{ textAlign: 'left' }}>
          模式说明
        </Text>
        <Text weight='normal' css={{ textAlign: 'left' }}>
          <ul>
            <li>模糊匹配：展示所有含当前选中任意食材的菜谱。</li>
            <li>精准匹配：展示所有含当前选中所有食材的菜谱。</li>
            <li>生存模式：展示当前选中食材即可制作的所有菜谱。</li>
          </ul>
        </Text>
        <Text h3 css={{ textAlign: 'left' }}>
          友情提示
        </Text>
        <Text weight='normal' css={{ textAlign: 'left' }}>
          <ul>
            <li>点击首页最上方的大锅图标，可清空所选食材和工具。</li>
            <li>本项目支持 PWA，使用浏览器打开时，可将其添加到主屏幕以获得近原生 APP 的体验。</li>
          </ul>
        </Text>
      </Container>

      <Spacer y={2} />

      <BaseFooter />
    </Container>
  );
}
