/**
 * 
 * @todo:后续会有大的调整
 */

import Vue from 'vue';

import {
  Loading,
  MessageBox,
  Message,
  Notification,

  //下面的部分自己选择，业务调整部分
  Breadcrumb,
  BreadcrumbItem

} from 'element-ui'

//下面的部分自己选择，业务调整部分
let components = [Breadcrumb,BreadcrumbItem]

components.forEach(function (item) {
    Vue.component(item.name.replace('El','Tp'), item);
});


Vue.use(Loading.directive);
Vue.prototype.$TP={}
Vue.prototype.$TP.$loading = Loading.service;
Vue.prototype.$TP.$msgbox = MessageBox;
Vue.prototype.$TP.$alert = MessageBox.alert;
Vue.prototype.$TP.$confirm = MessageBox.confirm;
Vue.prototype.$TP.$prompt = MessageBox.prompt;
Vue.prototype.$TP.$notify = Notification;
Vue.prototype.$TP.$message = Message;



