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
  ["白萝卜", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADk0lEQVQ4jd2TbUxbZRTHz723ty3tSu+AjA4Gdi10ZaUrljDEdYQhLANEHRmJ2eJcYlz8oCyB6Ii6GLfEZDGaOTW+T+f8sJeMLJpo3BRhwzJHsrWMvVhW6AttV2qhty3tvbft8/jpEiST6DfjPzlfznP+v/Oc5ByA/7UqrbbHAYBcmpP8W4i1pf0NJGQ9FCVRl1WVHGYY9cdcOnOVlksar//yfS/5IFPdY+0H6lo7HDqTrXz52yq14tmaHebjfIp/88mX2tSYhL1Gm+4Eo1F3r2toyFsEVlS0yQymrZt1tS1qOo/e13Wo01JUwpxZDswImVjNDnO+vlbLBCZDYKyvXGvtsKwWUlx8ZnQ0vQgk5IlWc/PGIb2xeHyBTZdTEgqsnRbTw01tfUuBWT7nioVZLHBZGPvBAWyEBYQw8OlMEACAEguZQi3W6Nfs6X65s3Tt+uK8K6dHoX5Xrez28F0ccLu+EevkTPklv9NbR0mokqkbHolUKRNuXrp9Le6b3x2N+hMUAIB1W9t+VYHiSOheuKx6axV9x+4CgiSAT/Pgcc6cuO+9NyIC50NTfNA9eWqVUhPKCJknMinhbceVH/dEo/6E+EOiVG+48PRbXRsNDXp68KvLIFNIYXLMDb6JQDYZS/XPhX2hpWM3bu9utlRXvf/awZ78ZHzBKFUWRfzTdx0AAAQAgMXWYpOrFJ837bPpNPoi+taQC34buI7SiRRhNhlvFq5m5AspTohG55zeSe8rhmqDfeDMZw9RJAkYY3jmuQNeu2OixuMYihFiV5PJJFWW6o6RJGFBGI3Ph9MD1cb1x0+f/NBI0zSEZyOQTnPQe/Bw6NHmpuJcgiV7e56Ho+9+BNsaG1D/oaN9vw4OHHvQGgIAwIYNW1Qv9r7uQwhhhBA+e/47/Ed0DnMcj/f3vJoLJ3mMEMLZbBaHwxHc2rn7a4AVLuX3TSWpRxLJXCB4HwoKGNi1swMAAFg2Dga9Nuv2BaUFlevgp8ERoCiS4zjeDrDsDv+ic+dys5Go99YdF7BsYjH9wScnQaVScoFAAPO8ABRF4nfe+3Q8Nef54m9ZoszW7bV9/UeC4thifHnqbGxLy07fDedErr1rr7Oioj5f9FArAWdD7pBMWche/PnypmQyRflnAlmPZ4aemvbRwyNXXxgeuVYcmg4+5XLZo6KHWAkoSqttktMqtJkAJEUIKzSaNWWx+MK3E2MX/f/E/9/Sn1S9nfZL1IrMAAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-filled-outline-lima-studio/20/000000/external-radish-vegetable-filled-outline-lima-studio.png' }],  // <a target="_blank" href="https://icons8.com/icon/tUEFyoPQ51Gv/radish">Radish icon by Icons8</a>
  ["西葫芦", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABuUlEQVQ4ja2Sv2tUQRDHPzO7e+/dj6e5S8JdDJaJ2ImgYKelIJIUWthoJbG2EltbUSQgV6WPf4KgYCVoY2EnnmAhWARNzpO83O5YhIiFd9FHptrd+X4/M7O7cMQh/yK62z9/E+QRllYerr15NU2rh8Hura/Oto8tLDf8zOte+/Slfv92mKb3hwHzPG206vXi3NLSyWi1y4MvPxaAtUod3n96ZVGVuRiTFM28fna5Qyv316Z5pgID1laVMWl/PxruUTTD8crAqL6JSvpT5Zy4jZe38kpAJ2neeWcxmQLkDU9wwuh7Z74SEKPnvHjG5gHK3UgWHEY8UQmYoKtesxitBpCiEYIiIouVgCp0vXdFSik7OKt5RSRVA1qiq17aKaUmQMiULCiGTBx56scWYdZ5bVsi7lcAVcGgW6lDIAA1InWAvTIhAgoVX1lEAZLZ7ztUBBM6lYBiVhwsAJwXDAOb7PtrYtPMvR8MzxiMMMYiMgQINcfXb7uI8Om/gNdFoikXQdd/7pRvs1YYAGxtl3z4vFMm5MnEqSYl3n3cPuW9Xnj2/MZW0WmsujLrhcZMpiYP7lx9/GKS78jjF+O0gsSTc3CrAAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/20/000000/external-zucchini-fruits-and-vegetables-icongeek26-flat-icongeek26.png' }],  // <a target="_blank" href="https://icons8.com/icon/EZU7nFBNbRGC/zucchini">Zucchini icon by Icons8</a>
  ["番茄", { iconifyIcon: tomatoIcon }],
  ["芹菜", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABuUlEQVQ4jaWSTU9TURCG35lze++5YG97EMHEJij7LvhYuuAvEAIrgxvDf9CQyK9g4doVG7buSNRoTAifKYYFAYVErEIqxdjb3nOGBYToorf1dnZzzjvPvJMZoMs4XJvS3ei4G1Hl3cR+3atXj49LYU/Aysqsv/9x8mUi8uBOIIH/8/7j2k7ZZAZy6XCmHsuS9uATyBHcm5bLzWUCvlodfv7h7OuZYrloOsopEt1IXLzx/Xe0vja2+N9AgTxNEnq9XfsWBX5fooPQva/+CAPlvwDxkwxA2gZwN7YOpZEF9A09o8FcAQOBHynG53Z1XkqnLQGSwSCYDvsfaniGRs292DbrnxqOK+3qUkMEXN0ct3L5VuTPntiDeSuylL7ItM9fu+UC4DEgADGENeNoK8oMjKEN5/LXCRGINRDbHu6wZQ17A9eJMEAhWgrZgZakqFR06xBKgyyK2R0Chr0IoBsZaxCr7A6JyJDKA0I3DxoQSQW2vUMAcIBhL3/rkFgDlA7s4FAMq/6/Rg7hiHsAgotE+p+RSVz2pYjDl6R5AiABIJDWKQh8lFbTMc7XJwqN2vKo1FYeycFsoZP+CgaYlPM3Zwj3AAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-flaticons-flat-flat-icons/20/000000/external-celery-gardening-flaticons-flat-flat-icons.png' }], // <a target="_blank" href="https://icons8.com/icon/oRJRYo6HqgAS/celery">Celery icon by Icons8</a>
  ["黄瓜", { iconifyIcon: cucumberIcon }],
  ["洋葱", { iconifyIcon: onionIcon }],
  ["莴笋", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACKUlEQVQ4jb3TvWtTURjH8d9zzs29Sa5JUwot4iC4iPgf1FEU51oQEaEOLgVdBTs0q1tBAiKCgy+46KKLFCEg4mRRhC6CqEtrbTBN2qT33ufFoVvJjdGKz3gO3w8PBw7wP6der7vTSxenYKDZR1cvnWtcuAcDDWtyL+fuzxWz8fJit9W9RuSWClGw0P3ZQbfdmZ08cvhV++uX7Wa9yfu7IA9Mx4ovuJ9NF+NSqbW2ccN5DxWFKW6J8KfC+MR3AHP7O5e/vJtWFQ8zlMrloLe1A04Y1VqFVeSMsJwaWA06vPxs/gQRFQAK+9s9iAh8GKAyMdYrjx06LqJeRCen62cnRwLV4SSAgByBHEFVJAgLKFdKgYhARWAiVQr8sZFA7/UtgDQuluGCAAB5qCLLOAycR1SIoKLtOJKPo22Y+ikiCsUUlThGrVYDgdDv7iCMor0NTav9lKojgQ/PN1bU7Ck5QhhFcM7DzKCZgDwhZYYpbr9eeLk2EggA3mQ+5azV6WzBBXtvCUdorW9id6f3ObHw5qAuF3wwc2fDgZ6IKjhjgAgqAmGBid19V3/e+yNw79YtExEUirgSQ1ihImDR5bwk96cAAAzviQhmBoCgKjA2Lh5NVnN3GOY9nml84yzrp0mCLE0AU6jIevNKc/evQBCMU/nBrFBVqAKqtjksGQ4CYOaWZBlEFDCACAcDVW2VM4GywAwQYOVAIKV23Xn3QU0TQN8UNVn8XfNP5xecJCDDcX/tQwAAAABJRU5ErkJggg==', icon8Cdn: 'https://img.icons8.com/external-flat-gradient-andi-nur-abdillah/20/000000/external-lettuce-vegetable-and-fruit-flat-gradient-flat-gradient-andi-nur-abdillah.png' }], // <a target="_blank" href="https://icons8.com/icon/OO7zIB6QnfnL/lettuce">Lettuce icon by Icons8</a>
  ["菌菇", { iconifyIcon: mushroomIcon }],
  ["茄子", { iconifyIcon: eggplantIcon }],
  ["豆腐", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAEMElEQVQ4jZ3UXWxTZRgH8P/7nvecnrZry9au3ScBNGygYRoHJEbjRjQoyRIiaFSUxAtFxXCjiRdqsnhHIsk0BBKjURNDCCoIGJwu0oUNCJnMMUjpYOtYt7Vbe2Z7+nl62vO+XuDIMvAC/tfP88v78eQheICIZLgBTOqDAIDyCVSLzwh5xAQA+iAgUPzKMkvrszfOrxdU/VjoSt5KXPteCFDpvk83d36LWbE+EYqbKS4vAIFsqJ+qDevaLh2XO9h/RY+Cky4Q4lnazLklYtGJWGh0qG/rnoNhIYIMcXJIz2v6R9+8Ezv8/rE1weHTia0bX/Qb2YWssKy1RMxc8oJakwBcAGAkp2HqCVDZBmdTC0Dlhb5TPygVjrXbtr/aCSIdsUoF0BWrMD43VpzRpvKdG7bVDPd+jUwu3UdB+OOCV1y5qasAALW2Ge6Hn4DN2wirZIAQeBmTCaOk/Y8zP29KpRZmCrM3YKWn0WQJ+zPrtvjGh38vZjM6DIN/SkEQMFPzUDyBO1e1uFWRbA6UFmZRnIsAlHAIznJ588ifvScDOqua5EUdlPJKbGIkE58MOUtlvv+FvYeGGMBXK9V1ACEAgHPhwb+Gbg3nPnh+X4ezuRXC4slqXyyvzc+QHe99OXS65+0PLwwEeyillsOmwOWQ3UWzclH3JbsBgIjYhR/NVGKnUu3H0Ys/DfaHzxV3buyq7VjT3sa8LTkwm4uX8qA2h4BVzkDwm7O3rs9dPHvyOUaJ4lBtQYmx155964v5RfCEkZjaTm0OxCvFSNEolFercgtVawyhVKtGLAyq2KHWt4K5fBCWCWFZ4BXjWu8vxzd37ekuLJ0MBmAKlEJx+1CfTqypwICwyqAS06Sa5ibZ0wAiSShGR1GMXoHibQYkGbLL66+rynQAOLMUpKDiFARgaNNQqgMQ3AQvl0FlhUBUYCYnYcTDsK/cALVhHQQXAIBCVstwTpTlg08ReDKo1jaGAEBYFpjDDubw6ESyNcLMo+D08FBWy1weG8jkmMwV30ow+wpEQxc8gtDCXSAhREDQA6p/pZ7SZiNaKpPmsjNhpucAMwu7ouLslTPJ4OhvSYfqpFSxgyjyQiGtMa5UBpaDBACCwW7VDCfmMwXDTYhU3vHKm3I2MgrV3wzZEwAc/sVSAMDM1f5IPDLSu+n1A3uXgwwAOju7DQAeAEj8ffQlAMeqVq1HbioEQiiYEDDzBZS0KVS1PGXEIyOrCSeHl2MAcNe26WwL7NLT/zTU1TcztabOBiqBmwWYC1E4m1qhTY9dTyVmL2/a/XnPvUB29y/x8Ynxmw9FJsYhM6nscFbptf66dG2ggWgTo3oiOvYYBfbdC7vzhsvz68F3vyuVyi+XuWW/vZVvx+20wet2Dm5+48DT9wUuJvhtt1rIx7cKQru4xTcripT2OVy72nfvj/5fz78IqfGrGRDIPwAAAABJRU5ErkJggg==', icon8Cdn: 'https://img.icons8.com/external-justicon-flat-justicon/20/000000/external-tofu-healthy-food-and-vegan-justicon-flat-justicon-1.png' }], // <a target="_blank" href="https://icons8.com/icon/pNuT91t2HxKn/tofu">Tofu icon by Icons8</a>
  ["包菜", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAE2klEQVQ4jX2UaUzTBxiHnx6AHK1Y0NbpOMQOLYonyARUZF4DZc7hNZfMuDnP7PDelmUxmVGZivGaxqiRZc5oFhEVxSnoZKIIqBQ7pAqzhUIpSOkFbel/H5xmW8h+H9/keZL3zZufhP9JvrBDlv1Z0pYOQ/fOwMDAJWJ/0Tifzyf2dPfUA77eGFEvsz5j0ofmLds2a+aw0UNCjmy6QEpyMonp8egMFZQX6Ry/nqpo6exwnml+2vY14P0nLPmPLHJEanT94vXTx4xOifVvbDChK2lhxeYPcPpbCA6XokmK9s/8aGK/MJV8/JOHje91tjsLAFtvwoGjpsTov8lbGjQkXoXFZaDkfCXJCWkMekOBtcfEia2FyBXB9FPKiNIMlE6cPUJ572pthtViPw04AcQvV4+fFH1/89ElAXJlH5oceuweKz6vDz8/KR6hC4D5n09l18qfeVbbAoDH3YN6WHTsuInxhslvT9j7UiiPSxha7XHSvyivnLpnOjw+NwDR48O4WXQbCVJc9m7OH75F7PgIImKV3Luk58J2LfsPHORa6eUAWXDfVYBSrBkf892mHavi8suPiWbPzuLk6jt0troAUKlDeVilpd3o4vaFGm78cp+1e+ZRV2Gg8lwjh08cQDVQiRsHi1dnStXxEVvEfQID5iSkxgMQN07Nuu1LKdpXA8CV3bVMmprMgEEK3lqYgCpSAcCZ7bfZmbsNkUiEAwsdGBmTrCE4JChLGiwLlEukEm5cLWXo5FD6j/TjeWMXggDDIkaxZMU8zF49xqct+AdIaXn2nOjIGOR95XRj535NBQDquCiC5YFysUQi8QMoLrqJuakNAGurA+3FZgiz0dChxSM4qasysjJnLro7z0hJTQHAQSuVpVqaja0A+Pn7+4t9PqFHQCBCM4CGmmYAsteko1IMxm7u4suF+2gwPWFiZhzXf3zA5cOVaEYOx9zWTO7Wo5ibLCgHhQPQ4/V6xXab3eYWHMSnxlBW+OJ2adljmTBLw+zlyeQUrCEkSM638/N4M3YGV0ouoo6NQRYWQE1FLY+19QyJfR0Al6OrS2xuaiuu0pWhilTgsLqwtTsBKC2ofvXxhblavvh0AxlZs0AsYKcVO60kThlNd5cbqZ8UY70Jh81VJTbqzfvyf7hlBshakcrJbVdoM1k5tOEcOctPAWCobmfajKn04KXRUYvF3oiAwKBIFelzkgE4fbSgp0Fn2ioG7pYVPtK3N3cyPDESxQAZOctPsWb3u2w4sggAqdgPACcWbpeUU/DTNQBO5J7ljwd6Wk1t3Cq6q3e5XGUSAFu787dHd/6cO+39BHl8SgzVpU+R9QtCHh7CsY1XCQ9VMjNjOjZaKL70O+U3HiCVShAEgY83LuKrT3Y6dfca0t1ut+XVnUKVsjlJMzWNhdbvhevuvcLaPfOE9MxUQWesFDqEJuG5YBQeCyXC2TuHhGXrFwhJaWOEqs6LQsbiKe4otXLRS8+/+jAkvE/agNcUx9cdXDg4MSlRopZMelECuLDRgpduAHw+H2XF99m/9Xhnk6Epu6m+vahX4d9RqKIUu9SxQ96Zn70wdGzySEIG+0AEJoOZitJqivJv2ttant/Q3q37ELD8E+5N+DJBfRUhGeoRkQs8np5okUgQIxLX6bWGM3ar/RLg6A36C6MgGEtBeHE+AAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/20/000000/external-cabbage-vegetable-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' }],  // <a target="_blank" href="https://icons8.com/icon/aqavsazggPNR/cabbage">Cabbage icon by Icons8</a>
  ["白菜", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAAD7UlEQVQ4jY3TfUzUdRzA8TcceHcc3AOHIOIjEVlyhGaAYRPH1iLXWdFc5WZZf5Ss6cq2mllrbmm11mzVX410s8XGlpnpMBMhAhSbEA8iD+cdcDvg8A5+9wT38Lvfrz+YeHDU/Pz3/Xy+n9f3t8/v+01gUSiVyvyi4oKzBoM+B+SE8fEJ+7B15KDHHbhsl+vUh6pP/uWwTa4Txchw++XuKmBksREbqY9tLZoacnbLgjwmC/KYbJvplPdU73Jt2V5Qc1Oqjw7KjfKg3Chfsf4kP15umgEMsYBigZaqNr//8aG9pWXFRAkzi0A42cv2ncUpl843FeWWGBN1Oi0+yYVSJ6NOVyRbuhxTgsvXetdIjAXTM/TGdGM6EYJ0267hkyaREAEw7346oaWpDZdoIyC58Utu1LokVCplZqwRC6ZoDfoDOauymcHNp+9+iyzfK2o0asKRCKMDTq7UdczltCpkSXoWSIkDN5cUnvnym+OPmIoKsFlHyF6diUJx77y25nYeMGWTtSadtt96Acg1raT6xPP5pq0P1sWBWp22tLSsGME7Tef1bkxbHprHnA4X/f23WJGVzaUfrxONROdrprL1pKSqtsWBoUhwNoiX48eO0XCulWXK5HuzSFUT8sskpsgEPEGG+8ZZEAmyIg6ccDgHb0/c5MDR13i05GH6Oofm96fpNOyr3sOfZzt46b0KsnMz5mvucQ8BT9AeB9oG7W/s33XE7vcGePVgFdb+UaJRiTOnLgKwPCudWU8IYdKHzqgBQLjj57N9tTO97Zbn7jqx93DK7RRuTLuFnRXmMo3T4aLp/FWEKR9PVGymtuYXcrfqaft5gJy85UTCUS58f01s/bWnUhTFG3FfCCCKonrjpvw0gKrXK2k418qbH7xC44UWbg32UrhlI+0X+5i0T7N8lZ41GzIVwWAwKdZYsABGBnqsHkCtM6Sxcu0KJEni8w+/46vmappqu9j9zg7KX9wEwNiQS2TRW05cBPa3/PF3V1tDRwjAYNSyTJlM3sZ1+L0+upstbDMXAvBPk4Weq8OdwOD/gdhvj5uPvn3CDhAORVCpleRtWI/DeodIOErSsrmx13xUP3Wz3fLk4v44EAirNaoQwMv7zQAM9FpYlZfFW1/M/0w0aSoRCN8PyKw/NOkV/JTumJtVapqGHw7Xo9TP1X3TMwQD4bGlehVLJcOi6PC4vJXbnynRADxlLifTmI1lvIfVa1Zy6pPfxa5m697ZwKztvsBIKGKdcgmrHcPOvOLyopSkJAU5a1cQ1QicPtogdTdaT45axr5eqjdhqeTdMGbqX9Aa0g4bMnQGKSonBMMBcSYQPDI6MFH3Xz3/AuGfsGquJHLkAAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/20/000000/external-cabbage-vegetable-vitaliy-gorbachev-lineal-color-vitaly-gorbachev-1.png' }], // <a target="_blank" href="https://icons8.com/icon/KTonns6J6oBL/cabbage">Cabbage icon by Icons8</a>
  ['玉米', { iconifyIcon: earOfCorn }],
  ["午餐肉", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADXElEQVQ4jY2US2icVRTHf+d+37wy32SmkzTTNNEmDTGtsWiCoqBG8NFaKEoRxGap4KYNYldxYQki6EoIVHQhIha6KIJ00YKIdGVFjCUpLSWNtsXQppnJy8nE+Z73urCdZGKiubt7zv/+zuGccw9s4ZjhD/rM0fd7t6KVTSGfnMmT1x+SzQ5yt5jl6iQgv4I5RaS/ls8+XtwS0Bx7bw9tO4dp33GEHS1xlAKt4ccxmJu/L3NDsS64KnY+M3ri5L+AZmgogWl8BfTbIC/UAmUb4bmnwLIgiuDiGMwtABCIxYLdQCbyZhoifxTMF/LpR/PWxQOvHk3EnZPpeHIIpKsua8+DmA1N20ApEIGZWQD+suIIkIncjAgvGsyB4Uf2Ve1q4A38VrrT7y/NzuSyLTfSTq5TRHbWoFeuw2wJwggW/6yZG6IAwSvr0J8IVsrbo8B/FCP7bAOxhq4u/KnJ1mJxupXitHYyuUv5bQXPjiUeBxOjtLC2TNroaFy7y9XArfQZbZ7VwIxRLGqr2wZsp7cXpibvP1CV5aX+yvISlm3PNjW1Xkuncw+Akch3//BXlnuMjvoBVhAuhEmqBkKEdhU22WBsE0Ubjk4UhoXi7HQBpnUh26yA3Wv9aQx9ls+8VuTEoEQu28YQmz97lha1pvWWxbogZsOIQJto2ix9b2Tkji22Fc90dOCkUlhOA6kHO7FSKW6fPrUxUCliD+9FFVoILl9Bl0prRCawt+9/uTfXsYuWfL7m8O7OrMtDasDEM09j9zwEgJ5fqAMiJlSSTPgiaz6MMZQnxtcBjQaQRAK7u3vVWlmpl2kJbZWIVwQoT4xTvjRG5HlElcr6UhkAyWRArQY31Wq9SExoSyy+7M7Nmer33226KOJO/h9fGNbZ7a5Ootu3a3clylPJZOxE9drVMTbopEokaR94jebHBhIAulzG+MEqsKeH+JNPAATA6SgWfWt3HXn9HHDu90OHukVzzBjeBBwA7bnowANl3auRJrp5s9YU47paMpmfrWRyMPXV57dgg/U1dfBgo6DeEJF3MexxWnejQ9/N+G4SQByH5P6XVsxc6RurWD4uI8fr/uXmC3ZkRN346ZfnUfIOMFDINjtgzqOt0fSZL3+Q/xj2/z23Dh/eWx18a9dWtH8DZuda1hcyjnUAAAAASUVORK5CYII=', icon8Cdn: 'https://img.icons8.com/external-icongeek26-flat-icongeek26/20/000000/external-meat-meat-icongeek26-flat-icongeek26-2.png' }],  // <a target="_blank" href="https://icons8.com/icon/WK6FWDECipNs/meat">Meat icon by Icons8</a>
  ["香肠", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADJ0lEQVQ4jdWSW2wUdRTGf/+Z2Zku7bZ0t5WtUNyyhbUQm3oJ0ERs0EJMSJQUNeHBGEgfgJgQ08R4IWqU8Ka+8GoMIRq8RNTEBGoIrcGSgCRUAsj2Rgq9sdudLt3dmZ3b3wejYI2pUR/0ezznfN/5cs4H/xcYQPwf8OOADqA2RaPPrK6u/ebxFYk9rvS7FSGCouteAvzFTNxfd8/+1bG6450rm/ZpQuxVFXFddCSS2VO798bUTA43CDiWvmy/f/H8lOd5n10ys6+aPQcbNx09/Fwg/ZDv4V8zMwPypbeMNy8OHEnFGxqefaBNhMzb+JbNQ8c+SIstzWvyvd0vVjMxfWd3yaLr5Jfy5ae2BxuakmrfyBC+DAikpG9w0FpiO+EDW7eBpkDRAikBWP/ph6OKVXY+euXE135O10AIANxiEaXCEBvvW6WKmSyb9So69QhbjWoOrd8Uvlqax7s5BYUSSEnOttjf35vLla2PtTM3ru9L5zLH+4eHDrfGGxp7WtrCzaqK7brIfB5Rdn53OAnkbAuBJD2X453zZ6bPzUyOTlqlAwXbPi0WHDqVqo29fmH78zNvn/uupm92+smH6xtCdw9cyEy5IZS85/varGMPDufNN4D0r/2Fgn/4JLB8QW0SsBfh/XtQ+cXlY8C9wMTf0FCAjUASGBftK1ae6mp9cLPjun7/6Ejm5M4XusXB124AY0DhT0TqgNb2xsQex/e2PN3cogvH8Y5c/fGE6Ewkp7/duXsZhSIogu/NLIfO9vs14bA9Z9mu47v2nG2HAKp0ww+HQhXLIhEja5X0rnWtYtfaNkSxBI7Lo58fHdPG58yRs8Pp+vb4coVAssTxeG9Dh5qqjVWiaqCrfDH0EwhBV2odyABcn2vZGayygzDzAAxM3QxuWYUJAUSaamrejRnhJ3Y0t9RtSySr10brUcWdAHhBAICmKL/VfCm5ksvQOz42/8nQldmsbfeO5c2eu2OjaprWkaiM7FCF8shSw4hWaCF9qaEr9RWVakhVxbzjBBPF217Jc+18uWw6MvhhvDD/led5fYALi+cQoAqIAhpQAm4BwV/g/UfxM/jgXO09cPA7AAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/20/000000/external-sausage-oktoberfest-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png' }],  // <a target="_blank" href="https://icons8.com/icon/40GetaUyssNb/sausage">Sausage icon by Icons8</a>
  ["腊肠", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACSUlEQVQ4jaWTzUtUYRSHn/PeO9eZuTM6+UVBiBsRrNwoM5kQE4kGKUpItXJbO52ti9oEEUKgf4Cuggpql1AT6EqhcZ1LqRaihIjOZMr1PW1URp0xP87uvOfHw/mdc17hgrHU1zdgVHsszDbm8x/MRYEGBhSeCrz9EY8/lPOC5jo6IltBMKoiveFQqKouHq/xjGl2zwv8EwTvgV5U+buzw6+1tfzu7m7COQ8s297eLyLPjjx7IhKceYYz6XRYRMZK1USk8szA3ULhBdBUqqbWTp9pKdlkskdUPwGlRjV/N5frPHWH2ba2G6L6rgzMAsMCeirgl1SqSYz5DFSVkbzqyuVyAP8Ffk2lWoy1M8CVMpJvCWuf7ycn3mE2mbyPtW+KO3M9j6utrVQ3NBAKh1WtjTmOM6QLC5MioiWXMpNOh/e2mSl24Xoe17q78eJxABxzyOBEbGRk+Bhw72jHKHEaje3tXG5uJl8oABDzfX6vrwNQm0hgRToPLM91dEQOvlOZqG5oOAAVx35XRnXwALgVBKMnwQDcigq1qpIvFIhFoxhjqE0kiiV17lJfXz+qD5ZWVq7rSTSYR7XKqrb83d4mGolggM1CgWgkgmMMAovGqN4TGPI871IZkAVeOr5/23Gc167jUF9Tg+s4h+wCG6hOGQuzALWxWB0i+SOwOeBmVy43emd2NogOD08CE8WCmO/jGLOJyCM/k1kWTafdn77/WKydX1xdDRljnohIpVo73bWw8FHg2CQ2xsdvGdVBROpF9TuqU34mswzwD9a8xAyg5v9uAAAAAElFTkSuQmCC', icon8Cdn: 'https://img.icons8.com/external-flat-juicy-fish/20/000000/external-salami-supermarket-flat-flat-juicy-fish.png' }],  // <a href="https://icons8.com/icon/6TR64lId8F6J/salami">Salami icon by Icons8</a>
  ["鸡肉", { iconifyIcon: poultryLeg }],
  ["猪肉", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAACRUlEQVQ4je2RT0iTcRjHP8/7blPTZVP8izMd/km6dIjIXBPBcJcgiCKCsOjQsQ4RFRJBhw4F3bt1KFAiSDImFYSm5iVIsjxUblMIBxrayqV736eDqdt0HurSoe/p9/z5fZ/v93ngP/4W8ief+vy+BhPrOtCAyI3gYPjxas0B0NNclbfdNG+hdndwaGow1FxVt6OKsx5v8jRQnltRNFB+tDUA2NG+z72feiYOohSjhHMc9KcOcwC4DbMNaESMS/2BWlHbfmKr9Q4ozxBnzI3F6lGKV+zJ5baX4URaQ39LTacI14ADKjqrtt0NuLO4tRYm52tXA1toymwwOobC90yDMyLaKSp7NlG1DuWblbC2rYaCdoX8NcE0QoBDA5EPHYPRh4qMZiUDbFUrI2UK+ijUUnPhub/aB793mCJh+9pTDEVkCkAcZkJte4qkNQ8r+1sXTR6id5LIPuBkGqGBvFX0BEDBzlKpDFZ4ATQ2Ppl4dtcLlIlUW6qYG/WvDDdSU972ymExWNzCtcuZn5zJyMVQO/D6VfjKBstV/uKigjJX3kRPJClCzmaM+Z7luaW4oxL4Cdx3LBtX20cja0PSCEU45ql3s/d8Uzw+/X0aZATUqaYzhsv9Q3IL95fszv/ydWrxJpYVCo5Mz2UOTD+K4gQoOvLUk9kYf3H4lCrBklIZ9nX1Psi2kzTC+ffRumQ8wcTFstpdt2cmU2sLHyPjS7MJNZzO1mxkkHEUl+kJUFLoa4zMRDMbK8+NvXEU5FY7c1zHtyL89/ELb4PEXlfisskAAAAASUVORK5CYII=', icon8Cdn: 'https://img.icons8.com/fluency/20/000000/cuts-of-pork.png' }], // <a target="_blank" href="https://icons8.com/icon/WMgykqM067sK/cuts-of-pork">Cuts Of Pork icon by Icons8</a>
  ["鸡蛋", { iconifyIcon: eggIcon }],
  ["虾", { iconifyIcon: shrimpIcon }],
  ["鱼", { iconifyIcon: fishIcon }],
  ["牛肉", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADfElEQVQ4jdWTXWhbdRjGn///fCYnOTk5+WjadG0zmq5lmx9TEWGXQ3Awb2Y3dKhXwkB3MVQEReiFXigoOBhOEWG7UJgXFooTCnoh3jhYsRTXLe3aJk3aJlmS5iQnOed/PuJFWUdlMnanz+XL+/x4X97nBf7rIg9ruDo5KQrDeJUK9Amgt20azrVc4vE/pqam/EcGXj4/me5TxdmDB0YmVEUhNnNQ2251SluV5W7L+vLEp1cvPRJw5oPTPx19+rHjHCUA2du6Vak1F1cKs+02++TMhekbDwV+e+6FxKHM0Nz46MigbXbQyJegxKIIJ2O7cM/zsFmtt1YLm3Nmq/3aqS9mCv8KnH7vpY+fe+rQ+wFZ2q116ttoV2qQwgrUgT6Qe2Dfx/U/F+ebleJR7kGwK2+dyCRi2kdD/cl4o1CCHA6BUAIhIEOJ6+j5PmprRbiWDSkcAqUUUTXUV6q2m3sm/P7ci0+G1eCHybj+TDaTHuQohdO1UC9sQJAlRPcNgND7FqvVRrNUhhCUEervw2/XF+YJAHz39snxiCx+NZROHh4cSEathgFeFiEpwV2z3e6gsb4BORxCJH1/XQBwGUN1u42Fmyuz3JWzzydTcX322SMTR6IRNUAJgSBLMLaqaJXvQlSC4AQevCgglNCBHlBbLcB3fUihIEAICMchd6cIi7nTVA2r7x4e3z9mVuqoLq3CYw4IJdCH04iPDsPYLKO6tAaPOQAAORJCaiILXhJg1psAgJu5PAJCwGEe+5lHjxwjlEBNJeDpGur5IjhRRHRoAJTjENs/BI8x1PMl8NJOHQCCugbGHMz/tYJIUMdarTD/8ufTv1DX92/fvlNCr9cDJwpIZDNQdA3lxWVYTQMAwIkiEtkRRAZTO/HpWljMFXArV0JK60elUV33mHsWAHhCyJImaZhbWEZUVZCIawgEZCTHR+EyB2bHgm0zGK0OzI4Nx/UgchJi4QQQBJbX12617O4bpz774QYA8E1mXtioVU6P7ctkLWZjo9iE7TggBOAoB0opeI6HIoWgarGduDDbL5RLK0bb+N2w3Hdev/hj7d7Fd2Jz/uRBRRAuxdTomK5qSUkQQQmF1/PguB6Yyzyz06mbdrfctbubFmO/uib75pWvZ+7+8yn2BPvym8fHJFE+xhN6gCOU71FiOC6rOF17iXBYOHPxWv5Bn/X/0t/Ay3CZt7+wAwAAAABJRU5ErkJggg==', icon8Cdn: 'https://img.icons8.com/office/20/000000/steak-medium.png' }], // <a target="_blank" href="https://icons8.com/icon/38826/beef">Beef icon by Icons8</a>
  ["骨头", { iconifyIcon: meatOnBone }],
  ["面食", { iconifyIcon: spaghettiIcon }],
  ["面包", { iconifyIcon: breadIcon }],
  ["米", { iconifyIcon: cookedRice }],
  ["方便面", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAADr0lEQVQ4jZWS22tcVRjF17nsc/aZM5lkZmKaSZpOU2IkSTuaW+OEVmK9DFISEaMiVSgIIij4IPgHCD4qij5YxCepPg00iaJpaBoTW1IGbTLahOY6mTCXXObMSebWOXMuvqhNk6nEDzZs9sf67fXtvRj8j+rr66OpVEqilDpN02QMw0gxDNNlWZbscDgqTdOcYMoJXx58ZcFV7Saapmk8z/OE51nTsgiVJK5CtkOQKOtyukjvU2fNO+E/bFSi0tbmJoaDwfcOAAcHX/2G5ZgLMrGIbpgghMDmrNEJT/7TfTS6Zmql0hv8/gbP88VcPlMY6GoSVmMKZtZShsWJBcqYBhGpKdhk1lbpsiilHJWoKMt2gYqUi6yuhEeuXAmWHbmzs/PUW+e7Q9FN1cjpVmJpMTpXXyX5I0pe5VlGT6j5FzmOq2BZtsIwDIkXRYckCOnJycmrBxz+U8txhY0kFPZoXXUlb7N5l9TiBDjyYzqTn5qdnV1+mK6sw8GBwFCgt6XfLRFmanYVPa0NsMkSLo/+jrpa51ZKzcXT6ewnI6Pj3+7XcvsPfD5fjf+JRz/KqFlHpdOBi4EOKPdK+OnGPAK9bZhbjsunm+tqOVHw53UumEwm1YcCe3p6HJrd9X0sbz2epI8w80XJmvY8iamFLSR2NczugMna3JhTDWslkZYLJney0VMzFIvFigdG9p0516/JVZ/uHDt5wrMwxb77+SVU1daVfSc1GcdX77+D9eYzZlX0zxUhm/4gfOP68L8Om5qaRCLbh/PVXkdVZOZWpu20N/7bNNvW1Q1d0w6s7774DHpNfYrM3ZouuBuOiZmtpytEcklRFGPvpzDd3d2NxWJxI+8PbKu+Xnp87U5Zh2xrO/ibV9ez09dbRFE8EgqFVgFYALA3NlYoFFoBgMfaz+rb3hY0nGqH59cfYJ+/DQDItnbAPDcAMAzSY8FSOBzOAVjZe1nZ2Dz/XKDYJIiCDmCgphrnXU4AwIiSRrBQAsfzWNuIK9fGRt37tWWD7eU482PKAgBs5H4Q+l1O9P+9f3NXzZfTlgUu8uLO26DUNHT4ViN43VMLItvxtaJinlagscOP+N3ljUMDU5J9/ZcLHx6xeIKxZATXbk/AEERkXnoN9oZGbJsGCmNDqUMDASZG8rtdmsON3drjmHzh4v1WugBhN4VmyZ47NJDR7y067s6gWO1Brv4E5PXFB/qisglWKy4dGsjtbH95dPrntMXCYPzPjOPm+LOwrAcSwZRyl8tp/wIgQoabhGKwIQAAAABJRU5ErkJggg==', icon8Cdn: 'https://img.icons8.com/external-wanicon-lineal-color-wanicon/20/000000/external-noodles-takeaway-wanicon-lineal-color-wanicon.png' }],  // <a target="_blank" href="https://icons8.com/icon/5nhiG01WkyRF/noodles">Noodles icon by Icons8</a>
  ["烤箱", { iconifyIcon: toasterOven }],
  ["空气炸锅", { base64: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABmJLR0QA/wD/AP+gvaeTAAABfklEQVQ4ja3UvUuXURQH8I+vESEEGmJL1liZvTgF4iJNQdQW/QPZkjnUEkSTU0gNglODQ0uYjolL0AuCpQ0OEgUtgkjQEqGEOtxjXJ9+v55H6guX59zvOfd7z7nn4TT4ExdwEgdr+HL8xDI+5GRDZnfgET7jPTZKBA/E5b24ifWi8CSOoQsjEVwF3Xixm1xzkP1Ywlc8xxjuxc3ncQObEduDJnzEd9zFW1zEm8YIOo35sJvwCb/QKj1Fa5ZRB46E3RbfdziTpz2Ms2GfwmNcrliyODucl5xjGbf3IbYHtQRznMOlAjeLxXoHGus5AncwhdVYU8FVyvA+vhX8R3ENW7G/GtxEIa4dr3Mib0qOp9IvdDjWWHBF/G5KWcmLGMz2g/7yfpQ35QmOZ/u54OqiLMN9oyxDUkNaMvufBWcxKk2Xyf8h+BIr2JaGRyXBFQzhS4ULauEEptk7YAdwSxpFfXhQIvIQC9LYGserouAhXJc6P4O1EsFOXJEa9Qw/YAfzFELO66FiKwAAAABJRU5ErkJggg==', iconifyIcon: multicookerOutline, icon8Cdn: 'https://img.icons8.com/external-itim2101-lineal-itim2101/20/000000/external-air-fryer-household-equipment-itim2101-lineal-itim2101.png' }], // <a target="_blank" href="https://icons8.com/icon/QUmzfo3b2pge/air-fryer">Air Fryer icon by Icons8</a>
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
      <Icon icon={icon.iconifyIcon} width={size} height={size} color={color} style={{ width: size, height: size }} />
    )
  } else
    if (icon.base64) {
      return (
        <Image src={icon.base64} width={size} height={size} style={{ width: size, height: size }} alt="🥬" ></Image>
      )
    } else
      if (icon.icon8Cdn) {
        return (
          <Image src={icon.icon8Cdn} width={size} height={size} style={{ width: size, height: size }} alt="🥬" ></Image>
        )
      }
  return <></>
}

export function Icons8License() {
  return (
    <div>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/tUEFyoPQ51Gv/radish">Radish icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/EZU7nFBNbRGC/zucchini">Zucchini icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/oRJRYo6HqgAS/celery">Celery icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/OO7zIB6QnfnL/lettuce">Lettuce icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/pNuT91t2HxKn/tofu">Tofu icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/aqavsazggPNR/cabbage">Cabbage icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/KTonns6J6oBL/cabbage">Cabbage icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/WK6FWDECipNs/meat">Meat icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/40GetaUyssNb/sausage">Sausage icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/WMgykqM067sK/cuts-of-pork">Cuts Of Pork icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/38826/beef">Beef icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/5nhiG01WkyRF/noodles">Noodles icon by Icons8</a>
      <a target="_blank" rel="noreferrer" href="https://icons8.com/icon/QUmzfo3b2pge/air-fryer">Air Fryer icon by Icons8</a>
    </div>
  )
}