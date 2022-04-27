/// <reference types = "Cypress" />
export class indexDOM{

    locSignIn = '.login';
    locContactUs = '#contact-link > a';
    locSearchBar = '#search_query_top';

    returnPageTitle(){
        let pageTitle;
        pageTitle = cy.title();
        return pageTitle;
    }

    clickSignInButton(){
        cy.get(this.locSignIn).click()
    }

    clickContactUs(){
        cy.get(this.locContactUs).click()
    }

    clickSearchBar(){
        cy.get(this.locSearchBar).click()
    }
    
}