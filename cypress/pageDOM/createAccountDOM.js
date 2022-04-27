/// <references types = "Cypress" />

export class createAccountDOM{

    createLoginDetails = require('../fixtures/createLoginData.json')

    locMaleRadioBtn = '#id_gender1';
    locFemaleRadioBtn = '#id_gender2';
    locFirstName = '#customer_firstname';
    locLastName = '#customer_lastname';
    locEmailAdrress = '#email';
    locPassword = '#passwd';
    locDOBDate = '#days';
    locDOBMonth = '#months';
    locDOBYear = '#years';
    locConfirmedCustomerFirstName = '#firstname';
    locConfirmedCustomerLastName = '#lastname';
    locCompany = '#company';
    locAddress1 = '#address1';
    locAddress2 = '#address2';
    locCity = '#city';
    locState = '#id_state'
    locPostCode = '#postcode';
    locCountry = '#id_country';
    locHomePhone = '#phone';
    locCustomerMobile = '#phone_mobile';
    locCustomerAddressAlias = '#alias';
    locRegisterBtn = '#submitAccount > span';
    locRequiredFieldsError = '.alert';

    selectGenerMale(){
        cy.get(this.locMaleRadioBtn).click()
    }

    selectGenerderFemale(){
        cy.get(this.locFemaleRadioBtn).click()
    }

    customerFirstName(){
        return cy.get(this.locFirstName)
    }

    customerLastName(){
        return cy.get(this.locLastName)
    }

    customerEmailAddress(){
        return cy.get(this.locEmailAdrress)
    }

    customerPassword(){
        return cy.get(this.locPassword)
    }

    customerDOBDate(){
        return cy.get(this.locDOBDate)
    }

    customerDOBMonth(){
        return cy.get(this.locDOBMonth)
    }

    customerDOBYear(){
        return cy.get(this.locDOBYear)
    }

    confirmedCustomerFirstName(){
        return cy.get(this.locConfirmedCustomerFirstName)
    }

    confirmedCustomerLastName(){
        return cy.get(this.locConfirmedCustomerLastName)
    }

    customerCompany(){
        return cy.get(this.locCompany);
    }

    customerAddress1(){
        return cy.get(this.locAddress1);
    }

    customerAddress2(){
        return cy.get(this.locAddress2);
    }

    customerCity(){
        return cy.get(this.locCity);
    }

    customerState(){
        return cy.get(this.locState);
    }

    customerPostCode(){
        return cy.get(this.locPostCode);
    }

    customerCountry(){
        return cy.get(this.locCountry);
    }

    customerHomePhone(){
        return cy.get(this.locHomePhone);
    }

    customerMobile(){
        return cy.get(this.locCustomerMobile);
    }

    customerAddressAlias(){
        return cy.get(this.locCustomerAddressAlias)
    }

    clickRegisterAccount(){
        cy.get(this.locRegisterBtn).click()
    }

    createAccountWithoutRequiredFields(){
        this.clickRegisterAccount()
    }

    createAccount(){
        if(this.createLoginDetails.gender.length >=6 ){
            this.selectGenerderFemale()
        }
        else{
            this.selectGenerMale()
        }

        this.customerFirstName().clear().type(this.createLoginDetails.firstname)
        this.customerLastName().clear().type(this.createLoginDetails.lastname)
        this.customerPassword().clear().type(this.createLoginDetails.password)
        this.customerDOBDate().select(this.createLoginDetails.date)
        this.customerDOBMonth().select(this.createLoginDetails.month)
        this.customerDOBYear().select(this.createLoginDetails.year)
        this.customerCompany().clear().type(this.createLoginDetails.company)
        this.customerAddress1().clear().type(this.createLoginDetails.address)
        this.customerCity().clear().type(this.createLoginDetails.city)
        this.customerState().select(this.createLoginDetails.state)
        this.customerPostCode().clear().type(this.createLoginDetails.postalcode)
        this.customerCountry().select(this.createLoginDetails.country)
        this.customerHomePhone().clear().type(this.createLoginDetails.homephone)
        this.customerMobile().clear().type(this.createLoginDetails.mobile)
        this.customerAddressAlias().clear().type(this.createLoginDetails.alias)
        this.clickRegisterAccount()
    }

    errorDetails(){
        return cy.get(this.locRequiredFieldsError)
    }
    
}
