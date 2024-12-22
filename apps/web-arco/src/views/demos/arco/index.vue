<script lang="ts" setup>
import { Page } from '@vben/common-ui';

import {
  Button,
  Card,
  Message,
  Notification,
  Space,
} from '@arco-design/web-vue';

function error() {
  Message.error('Once upon a time you dressed so fine');
}
function warning() {
  Message.warning('How many roads must a man walk down');
}
function success() {
  Message.success('Cause you walked hand in hand With another man in my place');
}
function loading() {
  Message.loading(
    'If I were you, I will realize that I love you more than any other guy',
  );
}

function notify(type: string) {
  Notification[type]({
    content: '说点啥呢',
    duration: 2500,
    meta: '想不出来',
  });
}
</script>

<template>
  <Page description="支持多语言，主题功能集成切换等" title="naive组件使用演示">
    <Card class="mb-5" title="按钮">
      <Space>
        <Button type="primary"> Primary </Button>
        <Button type="secondary"> Secondary </Button>
        <Button type="dashed"> Dashed </Button>
        <Button type="outline"> Outline </Button>
        <Button type="text"> Text </Button>
      </Space>
    </Card>

    <Card class="mb-5" title="Message">
      <Space>
        <Button status="primary" type="primary" @click="loading"> 主要 </Button>
        <Button status="success" type="primary" @click="success"> 成功 </Button>
        <Button status="warning" type="primary" @click="warning"> 警告 </Button>
        <Button status="danger" type="primary" @click="error"> 错误 </Button>
      </Space>
    </Card>

    <Card class="mb-5" title="Notification">
      <Space>
        <Button status="primary" type="primary" @click="notify('info')">
          主要
        </Button>
        <Button status="success" type="primary" @click="notify('success')">
          成功
        </Button>
        <Button status="error" type="primary" @click="notify('error')">
          错误
        </Button>
        <Button status="warning" type="primary" @click="notify('warning')">
          警告
        </Button>
      </Space>
    </Card>
  </Page>
</template>
