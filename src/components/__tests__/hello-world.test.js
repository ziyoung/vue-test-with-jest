import { shallowMount } from '@vue/test-utils'
import HelloWorld from '../HelloWorld.vue'

describe('demo test', () => {
  test('ref', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.classes()).toContain('hello')
  })
})
