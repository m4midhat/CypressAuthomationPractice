/// <reference types = "Cypress" />
import { indexDOM } from '../pageDOM/indexPageDOM'
import {authenticationDOM} from '../pageDOM/authenticationDOM';
import { myAccountDOM } from '../pageDOM/myAccountDOM';


const validCredentials = require('../fixtures/loginDetails.json')
const loginPage = new indexDOM;
const authenticationPage = new authenticationDOM;
const myAccountPage = new myAccountDOM;
const shoppingItems = require('../fixtures/shoppingItem.json')

describe('AutomationPractice App',()=>{

it('Add to Cart',()=>{
        cy.visit(Cypress.env('baseURL'))
        loginPage.clickSignInButton()
        authenticationPage.signInApplication(validCredentials.username, validCredentials.password)
        myAccountPage.pageTitle().should('eq', 'My account - My Store')
        myAccountPage.searchItem(shoppingItems.searchItem)
        myAccountPage.addToCart()
        myAccountPage.verifyProductName().should('contain',shoppingItems.searchItem)
    })
})