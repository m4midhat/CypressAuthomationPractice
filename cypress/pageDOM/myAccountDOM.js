/// <reference types = "Cypress" />
export class myAccountDOM{

    locSignOut = '.logout'
    locUserName = '.account > span'
    locSearchBar = '#search_query_top'
    locSearchButton = '#searchbox > .btn'
    locAddToCartBtn = '.ajax_add_to_cart_button > span'
    locProductName = '.block_content > :nth-child(1) > .product-content > h5 > .product-name'
    locProceedToCheckOut = '.button-container > .button-medium > span'
    locShoppingCartBar = '[title="View my shopping cart"]';
    locCheckOutProductName = '.cart_description > .product-name > a';
    

    pageTitle(){
        let pgtitle = cy.title();
        return pgtitle;
    }

    welcomeUserName(){
        let userNameOnMyAccount;
        userNameOnMyAccount = cy.get(this.locUserName)
        return userNameOnMyAccount
    }

    searchItem(itemName){
        cy.get(this.locSearchBar).click().clear().type(itemName)
        cy.get(this.locSearchButton).click()
    }

    addToCart(){
        cy.get(this.locAddToCartBtn).click()
        cy.get(this.locProceedToCheckOut).click()
            
    }

    verifyProductName(){
        return cy.get(this.locCheckOutProductName)
    }

    signOut(){
        cy.get(this.locSignOut).click()
    }
}