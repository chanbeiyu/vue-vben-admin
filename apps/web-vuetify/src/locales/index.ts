import type { LocaleSetupOptions, SupportedLanguagesType } from '@vben/locales';

import type { App } from 'vue';
import { ref } from 'vue';

import {
  $t,
  setupI18n as coreSetup,
  loadLocalesMapFromDir,
} from '@vben/locales';
import { preferences } from '@vben/preferences';

import { en, zhHans } from 'vuetify/locale';

const vuetifyLocale = ref({ $vuetify: zhHans });

const modules = import.meta.glob('./langs/**/*.json');

const localesMap = loadLocalesMapFromDir(
  /\.\/langs\/([^/]+)\/(.*)\.json$/,
  modules,
);
/**
 * 加载应用特有的语言包
 * 这里也可以改造为从服务端获取翻译数据
 * @param lang
 */
async function loadMessages(lang: SupportedLanguagesType) {
  const [appLocaleMessages] = await Promise.all([
    localesMap[lang]?.(),
    loadThirdPartyMessage(lang),
  ]);
  return appLocaleMessages?.default;
}

/**
 * 加载第三方组件库的语言包
 * @param lang
 */
async function loadThirdPartyMessage(lang: SupportedLanguagesType) {
  await loadVuetifyLocale(lang);
}

/**
 * 加载 Vuetify 的语言包
 * @param lang
 */
async function loadVuetifyLocale(lang: SupportedLanguagesType) {
  switch (lang) {
    case 'en-US': {
      vuetifyLocale.value = { $vuetify: en };
      break;
    }
    case 'zh-CN': {
      vuetifyLocale.value = { $vuetify: zhHans };
      break;
    }
  }
}

async function setupI18n(app: App, options: LocaleSetupOptions = {}) {
  await coreSetup(app, {
    defaultLocale: preferences.app.locale,
    loadMessages,
    missingWarn: !import.meta.env.PROD,
    ...options,
  });
}

export { $t, setupI18n, vuetifyLocale };
