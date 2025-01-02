import type { RouteRecordRaw } from 'vue-router';

import {
  VBEN_ANT_PREVIEW_URL,
  VBEN_ARCO_PREVIEW_URL,
  VBEN_DOC_URL,
  VBEN_ELE_PREVIEW_URL,
  VBEN_GITHUB_URL,
  VBEN_LOGO_URL,
  VBEN_NAIVE_PREVIEW_URL,
  VBEN_VUETIFY_PREVIEW_URL,
} from '@vben/constants';
import { SvgArcoLogoIcon } from '@vben/icons';

import { BasicLayout, IFrameView } from '#/layouts';
import { $t } from '#/locales';

const routes: RouteRecordRaw[] = [
  {
    component: BasicLayout,
    meta: {
      badgeType: 'dot',
      icon: VBEN_LOGO_URL,
      order: 9999,
      title: $t('demos.vben.title'),
    },
    name: 'VbenProject',
    path: '/vben-admin',
    children: [
      {
        name: 'VbenAbout',
        path: '/vben-admin/about',
        component: () => import('#/views/_core/about/index.vue'),
        meta: {
          icon: 'lucide:copyright',
          title: $t('demos.vben.about'),
        },
      },
      {
        name: 'VbenDocument',
        path: '/vben-admin/document',
        component: IFrameView,
        meta: {
          icon: 'lucide:book-open-text',
          link: VBEN_DOC_URL,
          title: $t('demos.vben.document'),
        },
      },
      {
        name: 'VbenGithub',
        path: '/vben-admin/github',
        component: IFrameView,
        meta: {
          icon: 'mdi:github',
          link: VBEN_GITHUB_URL,
          title: 'Github',
        },
      },
      {
        name: 'VbenAntd',
        path: '/vben-admin/antd',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:ant-design',
          link: VBEN_ANT_PREVIEW_URL,
          title: $t('demos.vben.antdv'),
        },
      },
      {
        name: 'VbenElementPlus',
        path: '/vben-admin/ele',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:element',
          link: VBEN_ELE_PREVIEW_URL,
          title: $t('demos.vben.element-plus'),
        },
      },
      {
        name: 'VbenNaive',
        path: '/vben-admin/naive',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:naiveui',
          link: VBEN_NAIVE_PREVIEW_URL,
          title: $t('demos.vben.naive-ui'),
        },
      },
      {
        name: 'VbenArcoDesign',
        path: '/vben-admin/arco',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: SvgArcoLogoIcon,
          link: VBEN_ARCO_PREVIEW_URL,
          title: $t('demos.vben.arco'),
        },
      },
      {
        name: 'VbenVuetify',
        path: '/vben-admin/vuetify',
        component: IFrameView,
        meta: {
          badgeType: 'dot',
          icon: 'logos:vuetifyjs',
          link: VBEN_VUETIFY_PREVIEW_URL,
          title: $t('demos.vben.vuetify'),
        },
      },
    ],
  },
];

export default routes;
