<script lang="ts" setup>
import { computed, watch } from 'vue';

import { preferences } from '@vben/preferences';

import enUS from '@arco-design/web-vue/es/locale/lang/en-us';
import zhCN from '@arco-design/web-vue/es/locale/lang/zh-cn';

defineOptions({ name: 'App' });

const tokenLocale = computed(() =>
  preferences.app.locale === 'zh-CN' ? zhCN : enUS,
);

const tokenTheme = computed(() => preferences.theme.mode);

watch(
  tokenTheme,
  (mode) => {
    switch (mode) {
      case 'dark': {
        document?.body?.setAttribute('arco-theme', 'dark');
        break;
      }
      case 'light': {
        document?.body?.removeAttribute('arco-theme');
        break;
      }
      default: {
        const darkThemeMq = window.matchMedia('(prefers-color-scheme: dark)');
        if (darkThemeMq.matches) {
          document.body.setAttribute('arco-theme', 'dark');
        } else {
          document.body.removeAttribute('arco-theme');
        }
      }
    }
  },
  { immediate: true },
);
</script>

<template>
  <AConfigProvider :locale="tokenLocale" class="h-full" size="medium">
    <RouterView />
  </AConfigProvider>
</template>
