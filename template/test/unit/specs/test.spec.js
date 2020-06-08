import { mount } from '@vue/test-utils'
import '@/test/component/pc'
import '@/test/component/mobile'
import '@/test/component/chart'
import Logo from '@/pages/travel/test/mobile/index'

jest.mock("@/plugins/teld.config")
jest.mock("@/plugins/utils/sgApi.js")


  beforeEach(() => {   
    jest.resetModules()
    jest.clearAllMocks()
  });


  describe('用户管理', () => {
    test("初始化-1-陈栋", () => {
      const wrapper = mount(Logo)
      expect(true).toBe(true)
    })
    test('bbbb-2-陈栋', () => {
      const wrapper = mount(Logo)
      expect(true).toBe(true)
    })
    test('cccc-3-陈栋', () => {
      const wrapper = mount(Logo)
      expect(true).toBe(true)
    })
  })

