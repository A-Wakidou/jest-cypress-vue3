import { shallowMount } from '@vue/test-utils'
import axios from 'axios'
import Home from '@/views/Home.vue'

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
  it('Mock Rick & Morty API', async() => {
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
        shallowMount(Home)
        expect(axios.get).toHaveBeenCalledTimes(1)
        expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character')
        axios.get('https://rickandmortyapi.com/api/character')
          .then( (result) => {
            expect(result).toEqual(apiDatas)
          })
          .catch(error => { console.log(error)})
    })
})
