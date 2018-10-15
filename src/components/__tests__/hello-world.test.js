import { config } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import ElementUI from 'element-ui'

config.stubs.transition = false

const localVue = createLocalVue()
localVue.use(ElementUI)

describe('demo test', () => {
  test('ref', () => {
    const wrapper = shallowMount(HelloWorld, {     
      localVue
     })
    expect(wrapper.classes()).toContain('hello')
  })
  test('ref1', () => {
    const wrapper = mount(HelloWorld, {     
      localVue
     })
    expect(wrapper.classes()).toContain('hello')
  })
})
