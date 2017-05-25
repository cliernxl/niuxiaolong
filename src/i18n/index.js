import Vue from 'vue';
import VueI18n from 'vue-i18n';
import i18nMessages from "../ap-base/lang";

Vue.use(VueI18n);

module.exports = new VueI18n({
  locale: 'zh',
  messages: i18nMessages
});
