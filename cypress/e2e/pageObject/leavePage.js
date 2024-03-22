export class LeavePage{

    roleNavigation(option){
        cy.get(".oxd-topbar-body-nav").contains(option).click()
    }

}