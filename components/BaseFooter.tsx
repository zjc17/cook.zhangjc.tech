import {Container, Row, Text} from "@nextui-org/react";
import {Icon} from '@iconify/react';
import bilibiliIcon from '@iconify/icons-arcticons/bilibili';
import roundCopyright from '@iconify/icons-ic/round-copyright';
import {Icons8License} from "./types/stuff_emoji";

export function BaseFooter({showBilibili = true}: { showBilibili?: boolean }) {
  return (
    <Container>
      <Row justify="center" align="center" css={{marginTop: '8px'}}>
        <a href="https://gpt-store.pro?utm_source=cook.zhangjc.tech">
          <Text h5 weight='light' css={{opacity: '0.8'}}>最全的 GPTs 商店</Text>
        </a>
      </Row>
      <Row justify="center" align="center" css={{marginTop: '8px'}}>
        <a href="https://characteraigenerator.com/start/MQ6ET4A?utm_source=cook.zhangjc.tech">
          <Text h5 weight='light' css={{opacity: '0.8'}}>免费 Stable Diffusion XL 在线</Text>
        </a>
      </Row>
      <Row justify="center" align="center" css={{marginTop: '8px'}}>
        <a href="https://bjca.miit.gov.cn/">
          <Text h5 weight='light' css={{opacity: '0.8'}}>京ICP备2021013281号</Text>
        </a>
      </Row>
      {
        showBilibili &&
        <Row justify="center" align="center">
          <a href="https://www.bilibili.com/blackboard/dynamic/306882">
            <Text h5 small weight='light' css={{opacity: '0.9'}}>
              菜谱视频来源：
              <Icon icon={bilibiliIcon} width="20" height="20"/>
              &nbsp;B站
            </Text>
          </a>
        </Row>
      }
      <Row justify="center" align="center">
        <a href="https://www.zhangjc.tech">
          <Text h5 small weight='light' css={{opacity: '0.9'}}>
            Cook
            <Icon icon={roundCopyright}/>
            &nbsp;J晨
          </Text>
        </a>
      </Row>
      <Row css={{display: 'none'}}>
        <Icons8License/>
      </Row>
    </Container>
  )
}