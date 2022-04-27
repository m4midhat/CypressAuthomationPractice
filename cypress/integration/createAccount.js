/// <reference types = "Cypress" />
import { indexDOM } from '../pageDOM/indexPageDOM'
import {authenticationDOM} from '../pageDOM/authenticationDOM';
import { createAccountDOM } from '../pageDOM/createAccountDOM';
import { myAccountDOM } from '../pageDOM/myAccountDOM';

var createLoginDetails = require('../fixtures/createLoginData.json')
const loginPage = new indexDOM;
const authenticationPage = new authenticationDOM;
const createAccountPage = new createAccountDOM;
const myAccount = new myAccountDOM;

describe('AutomationPractice App',()=>{

    it('Test the functionality of account creation',()=>{
        cy.visit(Cypress.env('baseURL'))
        loginPage.clickSignInButton()
        authenticationPage.CreateEmailBox().clear().type(createLoginDetails.email)
        authenticationPage.clickCreateAccountBtn()
        
        createAccountPage.createAccount()

    })
})