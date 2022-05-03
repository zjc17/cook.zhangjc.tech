import {
  Container,
  Spacer,
  useTheme,
} from "@nextui-org/react";
import { BaseFooter } from "../BaseFooter";
import { Menu } from "../Menu";

export default function AboutLayout({
  children,
  maxWidth = '900px',
  showBilibiliFooter = true,
  menuActivePath,
}: {
  children: React.ReactNode
  maxWidth?: string
  showBilibiliFooter?: boolean
  menuActivePath?: string
}) {
  const { theme } = useTheme();
  return (
    <Container xl>
      <Spacer y={1} />
      <Menu activePath={menuActivePath}/>
      <Spacer y={1} />
      <Container lg style={{ maxWidth: maxWidth }}>
        <main>{children}</main>
      </Container>
      <Spacer y={1} />
      <BaseFooter showBilibili={showBilibiliFooter} />
    </Container>
  );
}
