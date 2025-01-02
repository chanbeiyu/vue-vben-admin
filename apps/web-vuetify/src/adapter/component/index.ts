/**
 * 通用组件共同的使用的基础组件，原先放在 adapter/form 内部，限制了使用范围，这里提取出来，方便其他地方使用
 * 可用于 vben-form、vben-modal、vben-drawer 等组件使用,
 */

import type { BaseFormComponentType } from '@vben/common-ui';

import type { Component, SetupContext } from 'vue';
import { h } from 'vue';

import { ApiComponent, globalShareState, IconPicker } from '@vben/common-ui';
import { $t } from '@vben/locales';

import {
  VBtn,
  VBtnToggle,
  VCheckbox,
  VDatePicker,
  VDivider,
  VFileInput,
  VRow,
  VSelect,
  VSwitch,
  VTextField,
} from 'vuetify/components';
import { VTimePicker } from 'vuetify/labs/VTimePicker';
import { VTreeview } from 'vuetify/labs/VTreeview';

import { message } from '#/adapter/vuetify';

const withDefaultPlaceholder = <T extends Component>(
  component: T,
  type: 'input' | 'select',
) => {
  return (props: any, { attrs, slots }: Omit<SetupContext, 'expose'>) => {
    const placeholder = props?.placeholder || $t(`ui.placeholder.${type}`);
    return h(component, { ...props, ...attrs, placeholder }, slots);
  };
};

// 这里需要自行根据业务组件库进行适配，需要用到的组件都需要在这里类型说明
export type ComponentType =
  | 'ApiSelect'
  | 'ApiTreeSelect'
  | 'Checkbox'
  | 'CheckboxGroup'
  | 'DatePicker'
  | 'Divider'
  | 'IconPicker'
  | 'Input'
  | 'InputNumber'
  | 'RadioGroup'
  | 'Select'
  | 'Space'
  | 'Switch'
  | 'TimePicker'
  | 'TreeSelect'
  | 'Upload'
  | BaseFormComponentType;

async function initComponentAdapter() {
  const components: Partial<Record<ComponentType, Component>> = {
    // 如果你的组件体积比较大，可以使用异步加载
    // Button: () =>
    // import('xxx').then((res) => res.Button),

    ApiSelect: (props, { attrs, slots }) => {
      return h(
        ApiComponent,
        {
          placeholder: $t('ui.placeholder.select'),
          ...props,
          ...attrs,
          component: VSelect,
          modelPropName: 'value',
        },
        slots,
      );
    },
    ApiTreeSelect: (props, { attrs, slots }) => {
      return h(
        ApiComponent,
        {
          placeholder: $t('ui.placeholder.select'),
          ...props,
          ...attrs,
          component: VTreeview,
          nodeKey: 'value',
          loadingSlot: 'arrow',
          keyField: 'value',
          modelPropName: 'value',
          optionsPropName: 'options',
          visibleEvent: 'onVisibleChange',
        },
        slots,
      );
    },
    Checkbox: VCheckbox,
    CheckboxGroup: (props, { attrs, slots }) => {
      let defaultSlot;
      if (Reflect.has(slots, 'default')) {
        defaultSlot = slots.default;
      } else {
        const { options } = attrs;
        if (Array.isArray(options)) {
          defaultSlot = () => options.map((option) => h(VCheckbox, option));
        }
      }
      return h(VRow, { ...props, ...attrs }, { default: defaultSlot });
    },
    DatePicker: VDatePicker,
    // 自定义默认按钮
    DefaultButton: (props, { attrs, slots }) => {
      return h(VBtn, { ...props, attrs, color: 'info' }, slots);
    },
    // 自定义主要按钮
    PrimaryButton: (props, { attrs, slots }) => {
      return h(VBtn, { ...props, attrs, color: 'primary' }, slots);
    },
    Divider: VDivider,
    IconPicker: (props, { attrs, slots }) => {
      return h(
        IconPicker,
        { iconSlot: 'suffix', inputComponent: VTextField, ...props, ...attrs },
        slots,
      );
    },
    Input: withDefaultPlaceholder(VTextField, 'input'),
    InputNumber: withDefaultPlaceholder(VTextField, 'input'),
    RadioGroup: (props, { attrs, slots }) => {
      return h(VBtnToggle, { ...props, attrs }, slots);
    },
    Select: withDefaultPlaceholder(VSelect, 'select'),
    Space: (props, { attrs, slots }) => {
      return h('div', { ...props, attrs, class: 'gc-2' }, slots);
    },
    Switch: VSwitch,
    TimePicker: VTimePicker,
    TreeSelect: withDefaultPlaceholder(VTreeview, 'select'),
    Upload: VFileInput,
  };

  // 将组件注册到全局共享状态中
  globalShareState.setComponents(components);

  // 定义全局共享状态中的消息提示
  globalShareState.defineMessage({
    // 复制成功消息提示
    copyPreferencesSuccess: (title, content) => {
      message.success(content || title, {
        duration: 0,
      });
    },
  });
}

export { initComponentAdapter };
