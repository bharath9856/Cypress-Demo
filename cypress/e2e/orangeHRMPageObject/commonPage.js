

export class CommonPage{

    constructor() {

    }
    
    assertHeaderTitle(){
        return cy.get(".oxd-topbar-header-breadcrumb")
    }

    selectSidebarMenu(menu){
        cy.get(".oxd-sidepanel-body").contains(menu).click()
    }

    clickOnUserDropdown(){
        cy.get(".oxd-userdropdown").click({force:true})
    }

    selectUserDropdownList(option){
        cy.get(".oxd-dropdown-menu").contains(option).click({force:true})
    }

    roleNavigation(option){
        cy.get(".oxd-topbar-body-nav").contains(option).click()
    }

    clickButtonByName(name) {
        cy.get('button:not([disabled])').contains(name).eq(0).click()
    }


}