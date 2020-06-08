/**
 * 
 * @todo 后续会有大的调整
 * 
 */
import Vue from 'vue'

import Toast from 'vant/lib/toast';
import Notify from 'vant/lib/notify'
import Dialog from 'vant/lib/dialog';

//------------------业务自定义位置开始--------------------
import ActionSheet from 'vant/lib/action-sheet';
import Button from 'vant/lib/button';
import Circle from 'vant/lib/circle';
import Rate from 'vant/lib/rate';
import Row from 'vant/lib/row';


const components = [ActionSheet,Button,Circle,Rate,Row]
//------------------业务自定义位置结束--------------------

components.forEach(function (item) {
    if(item.name) Vue.component(item.name.replace('van','tm'), item);
    if (item.install) Vue.use(item);
});

Vue.prototype.$TM={}
Vue.prototype.$TM.Toast = Toast
Vue.prototype.$TM.Notify = Notify
Vue.prototype.$TM.Dialog = Dialog



// var components = ['ActionSheet',Button,Circle,Rate]
// const {install} = require('')
// install(components)