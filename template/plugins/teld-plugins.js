/**
 * Created by chendong on 2019/4/8.
 */
import Vue from 'vue'
//import jteldPlugin from './app/jteldPlugin'
// import utilsPlugin from './utils/utilsPlugin'

// //Vue.use(jteldPlugin)
// Vue.use(utilsPlugin)


/**
 * 增加日期格式化方法
 * @param fmt
 * @returns {*}
 */
Date.prototype.format = function(fmt) {
    var o = {
      "M+" : this.getMonth()+1,                 //月份
      "d+" : this.getDate(),                    //日
      "h+" : this.getHours(),                   //小时
      "m+" : this.getMinutes(),                 //分
      "s+" : this.getSeconds(),                 //秒
      "q+" : Math.floor((this.getMonth()+3)/3), //季度
      "S"  : this.getMilliseconds()             //毫秒
    };
    if(/(y+)/.test(fmt)) {
      fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    }
    for(var k in o) {
      if(new RegExp("("+ k +")").test(fmt)){
        fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
      }
    }
    return fmt;
  }

  import * as sgApi from '@teld/api-proxy/src/utils/ajax.js'
  import * as common from '@teld/api-proxy/src/utils/common.js'
  import * as cookie from '@teld/api-proxy/src/utils/cookie.js'
  import * as gaode from '@teld/api-proxy/src/utils/gaode.js'
  import * as storage from '@teld/api-proxy/src/utils/storage.js'
  import * as url from '@teld/api-proxy/src/utils/url.js'
  import * as environment from '@teld/api-proxy/src/utils/environment.js'
  import * as application from '@teld/api-proxy/src/utils/application.js'

  const utils = {
    sgApi,cookie,common,gaode,storage,url,environment,application
  }
  const plugin = {
    install (Vue) {
      Vue.prototype.$utils = utils
      Vue.utils = utils
    },
    $utils: utils
  }

  Vue.use(plugin)