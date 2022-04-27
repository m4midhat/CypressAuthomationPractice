/// <reference types = "Cypress" />
import { indexDOM } from '../pageDOM/indexPageDOM'
import {authenticationDOM} from '../pageDOM/authenticationDOM';

const invalidCredentials = require('../fixtures/incorrectSignIn.json')
const loginPage = new indexDOM;
const authenticationPage = new authenticationDOM;

describe('AutomationPractice App',()=>{
    
    it('Test the functionality of invalid credentials',()=>{
        cy.visit(Cypress.env('baseURL'))
        loginPage.clickSignInButton()
        authenticationPage.signInApplication(invalidCredentials.userName, invalidCredentials.password)
        let errorDiv = authenticationPage.authenticationFailed()
            errorDiv.should('contain.text','Authentication failed.')
        
    })
})