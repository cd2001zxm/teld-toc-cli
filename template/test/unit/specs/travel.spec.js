import { mount,shallowMount, createLocalVue } from '@vue/test-utils'
import '@/test/component/pc'
import '@/test/component/mobile'
import '@/test/component/chart'
import Vuex from 'vuex'
import Logo from '@/pages/travel/test/mobile/index'


const localVue = createLocalVue()
localVue.use(Vuex)


let store

  beforeEach(() => {   
    jest.resetModules()
    jest.clearAllMocks()

    //mock域名
    global.document.domain = ".wyqcd.net"

    //mock sg请求（其他模块都可以用这种方式mock）
    jest.mock("@teld/api-proxy/lib/ajax",()=>({
        getDataAsync:(param)=>{
          //请写入你期望的返回值
          console.log("mock 成功")
      }
    }))

    //mock容器api
    window.envApi = {
      getLocation:(cb)=>{
        let data = {1:1,2:2}
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
        increment (state) {
          state.counter++
        }
      }
    })
  });


  describe('用户管理', () => {
    test("初始化-1-陈栋", () => {
      const wrapper = shallowMount(Logo, { store, localVue })

      expect(true).toBe(true)
    })
  })

