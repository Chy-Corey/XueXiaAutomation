import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import '@mdi/font/css/materialdesignicons.css'  // 引入本地的Material Design Icons资源
Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi', // 'mdi' || 'mdiSvg' || 'md' || 'fa' || 'fa4' || 'faSvg'
  },
});
