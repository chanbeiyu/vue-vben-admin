<script lang="ts" setup>
import { computed, watch } from 'vue';

import { preferences } from '@vben/preferences';

import { useQuasar } from 'quasar';
import enUS from 'quasar/lang/en-US';
import zhCN from 'quasar/lang/zh-CN';

defineOptions({ name: 'App' });

const $q = useQuasar();

const tokenLocale = computed(() =>
  preferences.app.locale === 'zh-CN' ? zhCN : enUS,
);
const tokenTheme = computed(() =>
  preferences.theme.mode === 'auto'
    ? preferences.theme.mode
    : preferences.theme.mode === 'dark',
);

watch(
  tokenLocale,
  (newValue) => {
    $q.lang.set(newValue);
  },
  { immediate: true },
);

watch(tokenTheme, (newValue) => {
  $q.dark.set(newValue);
});
</script>

<template>
  <RouterView />
</template>
