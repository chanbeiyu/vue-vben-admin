<script lang="ts" setup>
import { Page } from '@vben/common-ui';

import { Notify, QBtn, QCard, QCardSection } from 'quasar';

function message(type: string) {
  Notify.create({
    type,
    message: '说点啥呢',
  });
}

function notify(type: string) {
  Notify.create({
    type,
    message: '说点啥呢',
    caption: '想不出来',
    closeBtn: true,
  });
}
</script>

<template>
  <Page description="支持多语言，主题功能集成切换等" title="naive组件使用演示">
    <QCard class="mb-5 rounded-2xl" title="按钮">
      <QCardSection>
        <div class="text-h6">按钮</div>
      </QCardSection>
      <QCardSection class="q-gutter-md">
        <QBtn>Default</QBtn>
        <QBtn color="primary"> Primary </QBtn>
        <QBtn color="secondary"> Secondary </QBtn>
        <QBtn color="info"> Info </QBtn>
        <QBtn color="positive"> Positive </QBtn>
        <QBtn color="warning"> Warning </QBtn>
        <QBtn color="negative"> Negative </QBtn>
        <QBtn color="accent"> Accent </QBtn>
        <QBtn color="dark"> Dark </QBtn>
      </QCardSection>
    </QCard>
    <QCard class="mb-5" title="Message">
      <QCardSection>
        <div class="text-h6">Message</div>
      </QCardSection>
      <QCardSection class="q-gutter-md">
        <QBtn color="info" @click="message('info')"> Info </QBtn>
        <QBtn color="positive" @click="message('positive')"> Positive </QBtn>
        <QBtn color="warning" @click="message('warning')"> Warning </QBtn>
        <QBtn color="negative" @click="message('negative')"> Negative </QBtn>
        <QBtn color="dark" @click="message('ongoing')"> Ongoing </QBtn>
      </QCardSection>
    </QCard>

    <QCard class="mb-5" title="Notification">
      <QCardSection>
        <div class="text-h6">Notification</div>
      </QCardSection>
      <QCardSection class="q-gutter-md">
        <QBtn color="info" @click="notify('info')"> Info </QBtn>
        <QBtn color="positive" @click="notify('positive')"> Positive </QBtn>
        <QBtn color="warning" @click="notify('warning')"> Warning </QBtn>
        <QBtn color="negative" @click="notify('negative')"> Negative </QBtn>
        <QBtn color="dark" @click="notify('ongoing')"> Ongoing </QBtn>
      </QCardSection>
    </QCard>
  </Page>
</template>
