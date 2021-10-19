import { createApp } from 'vue';
import App from './App.vue';
import router from './rotuer';

const baseApp = createApp(App);
// console.log(baseApp.config);
// baseApp.config = {
//   errorHandler: (err, vm, info) => {
//     console.log(err, vm, info);
//   },
//   warnHandler: (msg, vm, trace) => {
//     console.log(msg, vm, trace);
//   },
//   globalProperties: {},
//   optionMergeStrategies: {},
//   performance: false,
//   compilerOptions: {
//     isCustomElement: (tag: string) => false,
//     whitespace: 'condense',
//     delimiters: ['{{', '}}'],
//     comments: false,
//   },
// };
baseApp.config.warnHandler = (msg, vm, trace) => {
  // console.log(msg, vm, trace);
};
baseApp.config.errorHandler = (err, vm, info) => {
  // console.log(err, vm, info);
};
baseApp.use(router).mount('#app');
