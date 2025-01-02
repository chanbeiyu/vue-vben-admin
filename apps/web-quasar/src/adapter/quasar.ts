import type { App } from 'vue';

import { preferences } from '@vben/preferences';
import '@vben/styles';

import { Dialog, LoadingBar, Notify, Quasar } from 'quasar';

export const { dialog, loadingBar, message, modal, notification } = {
  loadingBar: LoadingBar,
  dialog: Dialog,
  message: Notify,
  modal: Dialog,
  notification: Notify,
};

export function appQuasar(app: App) {
  app.use(Quasar, {
    config: {
      dark: preferences.theme.mode === 'dark',
      notify: {
        position: 'top-right',
        timeout: 3000,
        color: 'info',
        classes: 'mw-200px',
      },
    },
    plugins: {
      Notify,
    },
  });
}
