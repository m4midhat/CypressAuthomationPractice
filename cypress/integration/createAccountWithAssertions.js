/// <reference types = "Cypress" />
import { indexDOM } from '../pageDOM/indexPageDOM'
import {authenticationDOM} from '../pageDOM/authenticationDOM';
import { createAccountDOM } from '../pageDOM/createAccountDOM';
import { myAccountDOM } from '../pageDOM/myAccountDOM';

var createLoginDetails = require('../fixtures/createAccountWithAssertions.json')
const loginPage = new indexDOM;
const authenticationPage = new authenticationDOM;
const createAccountPage = new createAccountDOM;
const myAccount = new myAccountDOM;

describe('AutomationPractice App',()=>{

    it('Test the functionality of account creation and validates results',()=>{
        cy.visit(Cypress.env('baseURL'))
        loginPage.clickSignInButton()
        authenticationPage.CreateEmailBox().clear().type(createLoginDetails.email)
        authenticationPage.clickCreateAccountBtn()
        
        createAccountPage.createAccount()
        myAccount.pageTitle().should('eq', 'My account - My Store')
        myAccount.welcomeUserName().should('contain.text', createLoginDetails.firstname)
        myAccount.welcomeUserName().should('contain.text', createLoginDetails.lastname)
        myAccount.signOut()

    })
})