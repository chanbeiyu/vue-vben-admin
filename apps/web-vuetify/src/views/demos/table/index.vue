<script setup lang="ts">
import { ref } from 'vue';

import { Page } from '@vben/common-ui';

import { VDataTable } from 'vuetify/components';

const headers = ref([
  {
    key: 'no',
    title: 'No',
  },
  {
    key: 'title',
    title: 'Title',
  },
  {
    key: 'length',
    title: 'Length',
  },
]);
const data = [
  { length: '4:18', no: 1, title: 'Wonderwall' },
  { length: '4:18', no: 2, title: 'Wonderwall' },
  { length: '4:18', no: 3, title: 'Wonderwall' },
  { length: '4:48', no: 4, title: "Don't Look Back in Anger" },
  { length: '7:27', no: 5, title: 'Champagne Supernova' },
  { length: '7:27', no: 6, title: 'Champagne Supernova' },
  { length: '7:27', no: 7, title: 'Champagne Supernova' },
  { length: '7:27', no: 8, title: 'Champagne Supernova' },
  { length: '7:27', no: 9, title: 'Champagne Supernova' },
  { length: '7:27', no: 10, title: 'Champagne Supernova' },
  { length: '7:27', no: 11, title: 'Champagne Supernova' },
  { length: '7:27', no: 12, title: 'Champagne Supernova' },
  { length: '7:27', no: 13, title: 'Champagne Supernova' },
  { length: '7:27', no: 14, title: 'Champagne Supernova' },
  { length: '7:27', no: 15, title: 'Champagne Supernova' },
];
</script>

<template>
  <Page
    description="表单页用于向用户收集或验证信息，基础表单常见于数据项较少的表单场景。"
    title="NDataTable"
  >
    <VCard>
      <VDataTable :headers="headers" :items="data" />
    </VCard>
  </Page>
</template>

<style scoped></style>
