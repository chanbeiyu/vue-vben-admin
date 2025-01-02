import { computed, watch } from 'vue';

import { preferences } from '@vben/preferences';
import '@vben/styles';
import { convertToRgb } from '@vben/utils';

import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import { en, zhHans } from 'vuetify/locale';

export const { dialog, loadingBar, message, modal, notification } = {
  dialog: Notification,
  loadingBar: Notification,
  message: Notification,
  modal: Notification,
  notification: Notification,
};

const radiusTheme = computed(() => {
  return preferences.theme.radius;
});

const primaryTheme = computed(() => {
  return preferences.theme.colorPrimary;
});

export const vuetify = createVuetify({
  components,
  directives,
  defaults: {
    global: {
      rounded: radius(radiusTheme.value),
    },
  },
  theme: {
    defaultTheme:
      preferences.theme.mode === 'auto' ? 'light' : preferences.theme.mode,
    themes: {
      light: {
        colors: {
          primary: convertToRgb(primaryTheme.value),
        },
      },
      dark: {
        colors: {
          primary: convertToRgb(primaryTheme.value),
        },
      },
    },
  },
  locale: {
    locale: preferences.app.locale === 'zh-CN' ? 'zhHans' : 'en',
    fallback: 'zhHans',
    messages: { zhHans, en },
  },
  icons: {
    defaultSet: 'mdi',
  },
});

export function radius(radius: string): string {
  let vuetifyRadius = '0';
  switch (radius) {
    case '0.5': {
      vuetifyRadius = 'xs';
      break;
    }
    case '0.25': {
      vuetifyRadius = 'sm';
      break;
    }
    case '0.75': {
      vuetifyRadius = 'lg';
      break;
    }
    case '1': {
      vuetifyRadius = 'xl';
      break;
    }
  }
  return vuetifyRadius;
}

watch(radiusTheme, (newValue) => {
  if (vuetify.defaults.value?.global?.rounded) {
    vuetify.defaults.value.global.rounded = radius(newValue);
  }
});
watch(primaryTheme, (newValue) => {
  if (vuetify.theme.themes.value?.light?.colors?.primary) {
    vuetify.theme.themes.value.light.colors.primary = convertToRgb(newValue);
  }
  if (vuetify.theme.themes.value?.dark?.colors?.primary) {
    vuetify.theme.themes.value.dark.colors.primary = convertToRgb(newValue);
  }
});
