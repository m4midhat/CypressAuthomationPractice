/// <reference types = "Cypress" />
export class authenticationDOM{

    locCreateEmailBox = '#email_create';
    locEmailBox = '#email';
    locCreateAccountHeading = '#create-account_form > .page-subheading';
    locPassword = '#passwd';
    locCreateAccountBtn = '#SubmitCreate > span';
    locSignInBtn = '#SubmitLogin > span'
    locAuthenticationFailed = '#center_column > :nth-child(2)'

    createAccountHeading(){
        let createAccountHeading = cy.get(locCreateAccountHeading).invoke('attr', 'text');
    }

    CreateEmailBox(){
        return cy.get(this.locCreateEmailBox);
    }

    txtEmailBox(){
        return cy.get(this.locEmailBox);
    }

    txtPasswordBox(){
        return cy.get(this.locPassword);
    }

    clickCreateAccountBtn(){
        cy.get(this.locCreateAccountBtn).click();
    }

    clickSignInBtn(){
        cy.get(this.locSignInBtn).click();
    }

    signInApplication(appUserName, appPassword){
        this.txtEmailBox().clear().type(appUserName)
        this.txtPasswordBox().clear().type(appPassword)
        this.clickSignInBtn()
    }

    authenticationFailed(){
        return cy.get(this.locAuthenticationFailed)
    }
}