import { Icon } from '@iconify/react';
import { Image } from '@nextui-org/react';
import type { IconifyIcon } from '@iconify/types';
import carrotIcon from '@iconify/icons-noto/carrot';
import potatoIcon from '@iconify/icons-noto/potato';
import broccoliIcon from '@iconify/icons-noto/broccoli';
import cucumberIcon from '@iconify/icons-noto/cucumber'
import earOfCorn from '@iconify/icons-noto/ear-of-corn';
import fishIcon from '@iconify/icons-noto/fish';
import meatOnBone from '@iconify/icons-noto/meat-on-bone';
import poultryLeg from '@iconify/icons-noto/poultry-leg';
// import potOfFood from '@iconify/icons-noto/pot-of-food';
// import shallowPanOfFood from '@iconify/icons-noto/shallow-pan-of-food';
import spaghettiIcon from '@iconify/icons-noto/spaghetti';
import breadIcon from '@iconify/icons-noto-v1/bread';
import tomatoIcon from '@iconify/icons-noto/tomato';
import onionIcon from '@iconify/icons-noto/onion';
import eggplantIcon from '@iconify/icons-noto/eggplant';
import mushroomIcon from '@iconify/icons-noto-v1/mushroom';
import eggIcon from '@iconify/icons-emojione/egg';
import shrimpIcon from '@iconify/icons-noto/shrimp';
import cookedRice from '@iconify/icons-noto-v1/cooked-rice';
import toasterOven from '@iconify/icons-mdi/toaster-oven';
import microwaveOven from '@iconify/icons-icon-park-outline/microwave-oven';
import smartHomeCooker from '@iconify/icons-gg/smart-home-cooker';
import potSteamOutline from '@iconify/icons-mdi/pot-steam-outline';
import multicookerOutline from '@iconify/icons-material-symbols/multicooker-outline';

interface Emoji {
  iconifyIcon?: IconifyIcon
  base64?: string
  icon8Cdn?: string
}

const emoji: Emoji = {}

const emojiMap: Map<string, Emoji> = new Map([
  ["土豆", { iconifyIcon: potatoIcon }],
  ["胡萝卜", { iconifyIcon: carrotIcon }],
  ["花菜", { iconifyIcon: broccoliIcon }],
  ["白萝卜", { icon8Cdn: 'https://img.icons8.com/external-filled-outline-lima-studio/20/000000/external-radish-vegetable-filled-outline-lima-studio.png' }],  // <a target="_blank" href="https://icons8.com/icon/tUEFyoPQ51Gv/radish">Radish icon by Icons8</a>
  ["西葫芦", { icon8Cdn: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/20/000000/external-zucchini-fruits-and-vegetables-icongeek26-flat-icongeek26.png' }],  // <a target="_blank" href="https://icons8.com/icon/EZU7nFBNbRGC/zucchini">Zucchini icon by Icons8</a>
  ["番茄", { iconifyIcon: tomatoIcon }],
  ["芹菜", { icon8Cdn: 'https://img.icons8.com/external-flaticons-flat-flat-icons/20/000000/external-celery-gardening-flaticons-flat-flat-icons.png' }], // <a target="_blank" href="https://icons8.com/icon/oRJRYo6HqgAS/celery">Celery icon by Icons8</a>
  ["黄瓜", { iconifyIcon: cucumberIcon }],
  ["洋葱", { iconifyIcon: onionIcon }],
  ["莴笋", { icon8Cdn: 'https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/20/000000/external-lettuce-vegetable-and-fruit-flat-gradient-flat-gradient-andi-nur-abdillah.png' }], // <a target="_blank" href="https://icons8.com/icon/OO7zIB6QnfnL/lettuce">Lettuce icon by Icons8</a>
  ["菌菇", { iconifyIcon: mushroomIcon }],
  ["茄子", { iconifyIcon: eggplantIcon }],
  ["豆腐", { icon8Cdn: 'https://img.icons8.com/external-justicon-flat-justicon/20/000000/external-tofu-healthy-food-and-vegan-justicon-flat-justicon-1.png' }], // <a target="_blank" href="https://icons8.com/icon/pNuT91t2HxKn/tofu">Tofu icon by Icons8</a>
  ["包菜", { icon8Cdn: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/20/000000/external-cabbage-vegetable-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' }],  // <a target="_blank" href="https://icons8.com/icon/aqavsazggPNR/cabbage">Cabbage icon by Icons8</a>
  ["白菜", { icon8Cdn: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/20/000000/external-cabbage-vegetable-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png' }], // <a target="_blank" href="https://icons8.com/icon/KTonns6J6oBL/cabbage">Cabbage icon by Icons8</a>
  ['玉米', { iconifyIcon: earOfCorn }],
  ["午餐肉", { icon8Cdn: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/20/000000/external-meat-meat-icongeek26-flat-icongeek26-2.png' }],  // <a target="_blank" href="https://icons8.com/icon/WK6FWDECipNs/meat">Meat icon by Icons8</a>
  ["香肠", { icon8Cdn: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/20/000000/external-sausage-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' }],  // <a target="_blank" href="https://icons8.com/icon/40GetaUyssNb/sausage">Sausage icon by Icons8</a>
  ["腊肠", { icon8Cdn: 'https://img.icons8.com/external-flat-juicy-fish/20/000000/external-salami-supermarket-flat-flat-juicy-fish.png' }],  // <a href="https://icons8.com/icon/6TR64lId8F6J/salami">Salami icon by Icons8</a>
  ["鸡肉", { iconifyIcon: poultryLeg }],
  ["猪肉", { icon8Cdn: 'https://img.icons8.com/fluency/20/000000/cuts-of-pork.png' }], // <a target="_blank" href="https://icons8.com/icon/WMgykqM067sK/cuts-of-pork">Cuts Of Pork icon by Icons8</a>
  ["鸡蛋", { iconifyIcon: eggIcon }],
  ["虾", { iconifyIcon: shrimpIcon }],
  ["鱼", { iconifyIcon: fishIcon }],
  ["牛肉", { icon8Cdn: 'https://img.icons8.com/office/20/000000/steak-medium.png' }], // <a target="_blank" href="https://icons8.com/icon/38826/beef">Beef icon by Icons8</a>
  ["骨头", { iconifyIcon: meatOnBone }],
  ["面食", { iconifyIcon: spaghettiIcon }],
  ["面包", { iconifyIcon: breadIcon }],
  ["米", { iconifyIcon: cookedRice }],
  ["方便面", { icon8Cdn: 'https://img.icons8.com/external-wanicon-lineal-color-wanicon/20/000000/external-noodles-takeaway-wanicon-lineal-color-wanicon.png' }],  // <a target="_blank" href="https://icons8.com/icon/5nhiG01WkyRF/noodles">Noodles icon by Icons8</a>
  ["烤箱", { iconifyIcon: toasterOven }],
  ["空气炸锅", { iconifyIcon: multicookerOutline, icon8Cdn: 'https://img.icons8.com/external-itim2101-lineal-itim2101/20/000000/external-air-fryer-household-equipment-itim2101-lineal-itim2101.png' }], // <a target="_blank" href="https://icons8.com/icon/QUmzfo3b2pge/air-fryer">Air Fryer icon by Icons8</a>
  ["微波炉", { iconifyIcon: microwaveOven }],
  ["电饭煲", { iconifyIcon: smartHomeCooker }],
  ["一口能炒又能煮的大锅", { iconifyIcon: potSteamOutline }],
  ['一口大锅', { iconifyIcon: potSteamOutline }],
])

export default function Emoji({ name, color }: { name: string, color?: string }) {
  const icon = emojiMap.get(name)
  const size = 20
  if (!icon) {
    return <></>
  }
  if (icon.iconifyIcon) {
    return (
      <Icon icon={icon.iconifyIcon} width={size} height={size} color={color} />
    )
  } else if (icon.icon8Cdn) {
    return (
      <Image src={icon.icon8Cdn} width={size} height={size} ></Image>
    )
  }
  return <></>
}

export function Icons8License() {
  return (
    <div>
      <a target="_blank" href="https://icons8.com/icon/tUEFyoPQ51Gv/radish">Radish icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/EZU7nFBNbRGC/zucchini">Zucchini icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/oRJRYo6HqgAS/celery">Celery icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/OO7zIB6QnfnL/lettuce">Lettuce icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/pNuT91t2HxKn/tofu">Tofu icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/aqavsazggPNR/cabbage">Cabbage icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/KTonns6J6oBL/cabbage">Cabbage icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/WK6FWDECipNs/meat">Meat icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/40GetaUyssNb/sausage">Sausage icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/WMgykqM067sK/cuts-of-pork">Cuts Of Pork icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/38826/beef">Beef icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/5nhiG01WkyRF/noodles">Noodles icon by Icons8</a>
      <a target="_blank" href="https://icons8.com/icon/QUmzfo3b2pge/air-fryer">Air Fryer icon by Icons8</a>
    </div>
  )
}