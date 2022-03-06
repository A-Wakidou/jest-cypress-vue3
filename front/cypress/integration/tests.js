import {mount} from '@cypress/vue'
import Navbar from '@/src/components/Navbar.vue'
// // import HomePage from '../../src/views/Home.vue'

// describe('Test components', () => {
//     it('renders the navbar', () => {
//         cy.visit('https:google.com')
//         // mount(Navbar)
//         cy.get('div .navbar').should('exist')
//     })
//     it('renders the home page', () =>{
//         cy.visit('http://localhost:8080')
//         // mount(HomePage)
//         cy.get('div .grid').should('exist')
//     })
// })

describe("Tests", () => {
    it("Test navbar", () => {
      cy.visit("http://localhost:8080");
      mount(Navbar)
    });
    it("Test substraction", () => {
      cy.visit("http://localhost:8080");
    });
  });
  