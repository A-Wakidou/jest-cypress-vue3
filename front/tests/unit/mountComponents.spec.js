import { shallowMount} from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'
import Home from '@/views/Home.vue'
import Cart from '@/views/Cart.vue'

describe('Tests components', () => {
  it('Mount navbar', () => {
    const wrapper = shallowMount(Navbar)
    expect(wrapper.exists()).toBe(true)
  })
  it('Mount home page', () => {
    const wrapper = shallowMount(Home)
    expect(wrapper.exists()).toBe(true)
  })
  it('Mount cart page', () => {
    const wrapper = shallowMount(Cart)
    expect(wrapper.exists()).toBe(true)
  })
})

