/// <reference types = "Cypress" />
import { indexDOM } from '../pageDOM/indexPageDOM'
import {authenticationDOM} from '../pageDOM/authenticationDOM';
import { createAccountDOM } from '../pageDOM/createAccountDOM';
import { myAccountDOM } from '../pageDOM/myAccountDOM';

var requireFields = require('../fixtures/requiredFields.json')

const loginPage = new indexDOM;
const authenticationPage = new authenticationDOM;
const createAccountPage = new createAccountDOM;
const myAccount = new myAccountDOM;

describe('AutomationPractice App',()=>{

    it('Test the functionality of required fields while account creation',()=>{
        cy.visit(Cypress.env('baseURL'))
        loginPage.clickSignInButton()
        authenticationPage.CreateEmailBox().clear().type(requireFields.email)
        authenticationPage.clickCreateAccountBtn()
        
        createAccountPage.createAccountWithoutRequiredFields()
        let errorDiv = createAccountPage.errorDetails()

        errorDiv.should('contain.text','firstname is required')
        errorDiv.should('contain.text','lastname is required')
        errorDiv.should('contain.text','passwd is required')
        errorDiv.should('contain.text','city is required')
        errorDiv.should('contain.text','address1 is required')
        
    })
})