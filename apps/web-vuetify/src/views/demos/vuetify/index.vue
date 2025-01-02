<script lang="ts" setup>
import { Page } from '@vben/common-ui';

function error() {
  // message.error('Once upon a time you dressed so fine');
}

function warning() {
  // message.warning('How many roads must a man walk down');
}
function success() {
  // message.success('Cause you walked hand in hand With another man in my place');
}
function loading() {
  // message.loading(
  //   'If I were you, I will realize that I love you more than any other guy',
  // );
}

function notify(type: string) {
  // notification[type]({
  //   content: '说点啥呢',
  //   duration: 2500,
  //   keepAliveOnHover: true,
  //   meta: '想不出来',
  // });
}
</script>

<template>
  <Page description="支持多语言，主题功能集成切换等" title="naive组件使用演示">
    <VCard class="gc-3 mb-5" title="按钮">
      <VContainer>
        <VBtn class="mr-4">Default</VBtn>
        <VBtn class="mr-4" color="primary"> Primary </VBtn>
        <VBtn class="mr-4" color="secondary"> Secondary </VBtn>
        <VBtn class="mr-4" color="info"> Info </VBtn>
        <VBtn class="mr-4" color="success"> Success </VBtn>
        <VBtn class="mr-4" color="warning"> Warning </VBtn>
      </VContainer>
    </VCard>

    <VCard class="gc-3 mb-5" title="Message">
      <VContainer>
        <VBtn class="mr-4" color="info" @click="error"> 信息 </VBtn>
        <VBtn class="mr-4" color="primary" @click="loading"> 加载中 </VBtn>
        <VBtn class="mr-4" color="success" @click="success"> 成功 </VBtn>
        <VBtn class="mr-4" color="warning" @click="warning"> 警告 </VBtn>
        <VBtn class="mr-4" color="error" @click="error"> 错误 </VBtn>
      </VContainer>
    </VCard>

    <VCard class="gc-3 mb-5" title="Notification">
      <VContainer>
        <VBtn class="mr-4" color="info" @click="notify('info')"> 加载中 </VBtn>
        <VBtn class="mr-4" color="success" @click="notify('success')">
          成功
        </VBtn>
        <VBtn class="mr-4" color="warning" @click="notify('warning')">
          警告
        </VBtn>
        <VBtn class="mr-4" color="error" @click="notify('error')"> 错误 </VBtn>
      </VContainer>
    </VCard>
  </Page>
</template>
