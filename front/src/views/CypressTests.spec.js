import { mount } from '@cypress/vue'
import Home from './Home.vue'
import Navbar from '../components/Navbar.vue'
import Cart from './Cart.vue'

describe('Tests', () => {
  it('nav mounted, logos displayed and have links', () => {
    mount(Navbar)
    cy.get('.navbar img').should('be.visible')
    cy.get('#home-link').should('have.attr', 'to', '/')
    cy.get('#cart-link').should('have.attr', 'to', '/cart')
  })
  it('home component mounted and cards displayed', () => {
    mount(Home)
    cy.get('h1').should('have.text', 'Achat Figurines')
    cy.get('.card').should('have.length', 20)
  })
  it('cart component mounted and details displayed', () => {
    mount(Cart)
    cy.get('h1').should('have.text', 'Panier')
    cy.get('.cart').should('be.visible')
    cy.get('.products').should('be.visible')
    cy.get('.text-cart').should('be.visible')
  })
})