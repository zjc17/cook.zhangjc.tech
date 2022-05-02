import { Row, Grid } from "@nextui-org/react";
import Link from "next/link"
import { useTheme as useNextTheme } from 'next-themes'
import { useTheme } from '@nextui-org/react'

import { Icon } from '@iconify/react';
import homeIcon from '@iconify/icons-akar-icons/home';
import sunIcon from '@iconify/icons-cil/sun';
import moonIcon from '@iconify/icons-bytesize/moon';
import questionCircleOutlined from '@iconify/icons-ant-design/question-circle-outlined';
import githubOutline from "@iconify/icons-eva/github-outline";
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

export function Menu() {
  const { theme } = useTheme();
  return (
    <Row wrap="wrap" justify="center" align="center" style={{ height: '29px' }}>
      <Grid css={{ margin: '2px 8px', width: '25px', height: '25px' }}>
        <Link href="/">
          <Icon icon={homeIcon} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={{ margin: '2px 8px', width: '25px', height: '25px' }}>
        <Link href="/plant">
          <Icon icon={plantOutline} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={{ margin: '2px 8px', width: '25px', height: '25px' }}>
        <ThemeSwitch />
      </Grid>
      <Grid css={{ margin: '2px 8px', width: '25px', height: '25px' }}>
        <Link href="/help">
          <Icon icon={questionCircleOutlined} width="25" height="25" color={theme.colors.foreground.value} />
        </Link>
      </Grid>
      <Grid css={{ margin: '2px 8px', width: '25px', height: '25px' }}>
        <Link href="https://github.com/zjc17/cook.zhangjc.tech">
          <a target='_blank'><Icon icon={githubOutline} width="25" height="25" color={theme.colors.foreground.value} /></a>
        </Link>
      </Grid>
      {/* <div>
        The current theme is: {type}
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </div> */}
    </Row>
  )
}