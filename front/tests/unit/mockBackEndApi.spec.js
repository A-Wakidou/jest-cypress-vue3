import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Cart from '@/views/Cart.vue'

jest.mock('axios')

var  apiDatas = [
  {
    id: 1,
    name: "Rick Sanchez",
    quantity: '10'
  },
  {
    id: 2,
    name: "Morty Smith",
    quantity: '15'
  }
]

describe('Test API Request', () => {
  it('Mock BackEnd API', async() => {
    axios.get.mockResolvedValue(
      [
        {
          id: 1,
          name: "Rick Sanchez",
          quantity: '10'
        },
        {
          id: 2,
          name: "Morty Smith",
          quantity: '15'
        }
      ])
    shallowMount(Cart)
    expect(axios.get).toHaveBeenCalledTimes(1)
    expect(axios.get).toHaveBeenCalledWith('http://localhost:3000/cart/getCart')
    axios.get('http://localhost:3000/cart/getCart')
      .then( (result) => {
        expect(result).toEqual(apiDatas)
      })
      .catch(error => { console.log(error)})
  })
})