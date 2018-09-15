import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import router from "./router/index"
Vue.config.productionTip = false;
Vue.use(iView);
new Vue({
    render: h => h(App),
    router
}).$mount('#app');