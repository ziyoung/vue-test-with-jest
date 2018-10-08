import { shallowMount } from '@vue/test-utils'
import Select from '../select.vue'

describe('demo test', () => {
  test('ref', () => {
    const wrapper = shallowMount(Select)
    expect(wrapper.classes()).toContain('select')
    expect(wrapper.vm.a).toBe(1)
  })
})
