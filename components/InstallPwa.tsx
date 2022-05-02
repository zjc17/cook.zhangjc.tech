import { appState } from "../store/app";
import { Button, Row } from "@nextui-org/react";

function install(deferredPrompt: Event | any) {
  // const deferredPrompt = appState(state => state.deferredPrompt)
  // Show the install prompt
  deferredPrompt.prompt();
  // Wait for the user to respond to the prompt
  deferredPrompt.userChoice.then((choiceResult: any) => {
    if (choiceResult.outcome === "accepted")
      // eslint-disable-next-line no-console
      console.log("User accepted the install prompt");
    // eslint-disable-next-line no-console
    else console.log("User dismissed the install prompt");
  });
}

export function InstallPWA() {
  const deferredPrompt = appState((state) => state.deferredPrompt);
  // const { theme, type } = useTheme();
  // console.log('deferredPrompt', deferredPrompt)

  if (deferredPrompt) {
    // console.log('pwa not install')
    return (
      <Row justify="center" align="center">
        <Button
          color="success"
          onClick={() => {
            install(deferredPrompt);
          }}
          css={{
            justify: "center",
            align: "center",
            textAlign: "center",
            justifyContent: "center",
          }}
        >
          安装
        </Button>
      </Row>
    );
  } else {
    // console.log('pwa installed ')
    return <></>;
  }
}
