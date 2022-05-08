import { appState } from "../store/app"
import { useEffect } from "react";


/**
 * https://web.dev/customize-install/#detect-install
 * @returns
 */
export function InstallPrompt() {
  const setDeferedPrompt = appState(state => state.setDeferedPrompt)

  // detect whether client 
  // https://stackoverflow.com/questions/32216383/in-react-how-do-i-detect-if-my-component-is-rendering-from-the-client-or-the-se
  // if (typeof window !== 'undefined' &&
  //   window.document && window.document.createElement) {
  //   return
  // }
  useEffect(() => {
    window.addEventListener('beforeinstallprompt', (e) => {
      // Prevent the mini-infobar from appearing on mobile
      // e.preventDefault()
      // Stash the event so it can be triggered later.
      setDeferedPrompt(e)
      // Update UI notify the user they can install the PWA
      // showInstallPromotion()
      // Optionally, send analytics event that PWA install promo was shown.
      // eslint-disable-next-line no-console
      console.log('\'beforeinstallprompt\' event was fired.')
    })
  
    window.addEventListener('appinstalled', () => {
      // Hide the app-provided install promotion
      // hideInstallPromotion()
      // Clear the deferredPrompt so it can be garbage collected
      setDeferedPrompt(null)
      // Optionally, send analytics event to indicate successful install
      // eslint-disable-next-line no-console
      console.log('PWA was installed')
    })
  });
}
