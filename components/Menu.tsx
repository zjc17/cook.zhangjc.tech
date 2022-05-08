import { Row, Grid, CSS } from "@nextui-org/react";
import Link from "next/link"
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'

import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-akar-icons/home';
import sunIcon from '@iconify/icons-cil/sun';
import moonIcon from '@iconify/icons-bytesize/moon';
import questionCircleOutlined from '@iconify/icons-ant-design/question-circle-outlined';
import githubOutline from "@iconify/icons-eva/github-outline";
import chefHat from '@iconify/icons-icon-park-outline/chef-hat';
// import plantPot from '@iconify/icons-charm/plant-pot';
import plantOutline from '@iconify/icons-teenyicons/plant-outline';



function ThemeSwitch() {
  const { setTheme } = useNextTheme();
  const { theme, isDark } = useTheme();
  if (isDark) {
    return <Icon icon={sunIcon} width="25" height="25"
      color={theme.colors.foreground.value}
      onClick={() => { setTheme('light') }} />
  } else {
    return <Icon icon={moonIcon} width="25" height="25"
      color={theme.colors.foreground.value}
      onClick={() => { setTheme('dark') }} />
  }
}

export function Menu({ activePath }: { activePath?: string }) {
  const { theme } = useTheme();
  const activeStyle: CSS = {
    margin: '2px 8px', width: '25px', height: '30px',
    paddingBottom: '5px',
    borderBottom: `2.5px solid ${theme.colors.foreground.value}`,
  }
  const inactiveStyle: CSS = {
    margin: '2px 8px', width: '25px', height: '30px',
    paddingBottom: '5px',
  }
  return (
    <Row wrap="wrap" justify="center" align="center" style={{ height: '34px' }}>
      <Grid css={activePath == '/' ? activeStyle : inactiveStyle}>
        <Link href="/" passHref>
          <Icon icon={homeIcon} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={activePath == '/plant' ? activeStyle : inactiveStyle}>
        <Link href="/plant" passHref>
          <Icon icon={plantOutline} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={activePath == '/laofangu' ? activeStyle : inactiveStyle}>
        <Link href="/laofangu" passHref>
          <Icon icon={chefHat} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={inactiveStyle}>
        <ThemeSwitch />
      </Grid>
      <Grid css={activePath == '/help' ? activeStyle : inactiveStyle}>
        <Link href="/help" passHref>
          <Icon icon={questionCircleOutlined} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={inactiveStyle}>
        <Link href="https://github.com/zjc17/cook.zhangjc.tech" passHref>
          <a target='_blank'><Icon icon={githubOutline} width="25" height="25" color={theme.colors.foreground.value} /></a>
        </Link>
      </Grid>
    </Row>
  )
}