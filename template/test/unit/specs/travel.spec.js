import { mount, shallowMount, createLocalVue } from '@vue/test-utils'
import '@/test/component/pc'
import '@/test/component/mobile'
import '@/test/component/chart'
import Vuex from 'vuex'
import Logo from '@/pages/travel/test/mobile/index'


const localVue = createLocalVue()
localVue.use(Vuex)

//mock域名
global.document.domain = ".wyqcd.net"

//注册公共组件库
//影响实际代码中的this.$utils.XXX
const common = require('@teld/api-proxy/lib/common.js')
const cookie = require('@teld/api-proxy/lib/cookie.js')
const gaode = require('@teld/api-proxy/lib/gaode.js')
const storage = require('@teld/api-proxy/lib/storage.js')
const url = require('@teld/api-proxy/lib/url.js')
const $utils = {
  common: common,
  cookie:cookie,
  gaode:gaode,
  storage:storage,
  url:url,
  sgApi: {
    getDataAsync: (param) => {
      //可以根据param参数，写入你期望的返回值
      console.log("mock 成功")
    }
  }
}

let store

beforeEach(() => {

  jest.resetModules()
  jest.clearAllMocks()


  //mock容器api
  window.envApi = {
    getLocation: (cb) => {
      let data = { 1: 1, 2: 2 }
      cb(data)
    }
  }

  //vuex
  store = new Vuex.Store({
    state: () => ({
      counter: 0
    })
    ,
    mutations: {
      increment(state) {
        state.counter++
      }
    }
  })
});


describe('用户管理', () => {
  test("初始化-1-陈栋", () => {

    const wrapper = shallowMount(Logo, {
      store, localVue,
      mocks: {
        $utils
      }
    })

    expect(true).toBe(true)
  })
})

