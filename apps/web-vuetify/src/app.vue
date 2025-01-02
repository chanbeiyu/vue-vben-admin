<script lang="ts" setup>
import { computed, watch } from 'vue';

import { preferences } from '@vben/preferences';

import { useLocale, useTheme } from 'vuetify';
import { VApp, VMain } from 'vuetify/components';

defineOptions({ name: 'App' });

const theme = useTheme();
const { current } = useLocale();

const tokenLocale = computed(() => {
  return preferences.app.locale === 'zh-CN' ? 'zhHans' : 'en';
});

const tokenTheme = computed(() => {
  return preferences.theme.mode === 'auto' ? 'light' : preferences.theme.mode;
});

watch(tokenLocale, (newValue) => {
  current.value = newValue;
});
watch(tokenTheme, (newValue) => {
  theme.global.name.value = newValue;
});
</script>

<template>
  <VApp>
    <VMain>
      <RouterView />
    </VMain>
  </VApp>
</template>
