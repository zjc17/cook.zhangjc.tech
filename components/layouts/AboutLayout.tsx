import {
  Container,
  Spacer,
  useTheme,
} from "@nextui-org/react";
import { BaseFooter } from "../BaseFooter";
import { Menu } from "../Menu";

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  return (
    <Container xl>
      <Spacer y={1} />
      <Menu />
      <Spacer y={1} />
      <Container lg css={{ maxWidth: "900px" }}>
        <main>{children}</main>
      </Container>
      <Spacer y={1} />
      <BaseFooter />
    </Container>
  );
}
