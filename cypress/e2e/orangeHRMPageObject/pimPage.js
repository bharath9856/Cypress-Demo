export class PIMPage{

    enterEmployeeName(type){
        cy.get(".oxd-autocomplete-wrapper input").first().clear().type(type)
    }

    enterEmployeeId(type){
        cy.get(".oxd-input.oxd-input--active").eq(1).clear().type(type)
    }

    selectEmploymentStatus(name){
        cy.get(".oxd-select-text.oxd-select-text").eq(0).click()
        cy.get("span").contains(name).click({force:true})
    }

    selectInclue(name){
        cy.get(".oxd-select-text.oxd-select-text").eq(1).click()
        cy.get("span").contains(name).click({force:true})
    }

    enterSupervisorName(){
        cy.get(".oxd-autocomplete-wrapper input").eq(1).clear().type(type)
    }

    selectJobTitle(name){
        cy.get(".oxd-select-text.oxd-select-text").eq(2).click()
        cy.get("span").contains(name).click({force:true})
    }

    selectSubUnit(name){
        cy.get(".oxd-select-text.oxd-select-text").eq(3).click()
        cy.get("span").contains(name).click({force:true})
    }

    enterEmployeeFirstName(type){
        cy.get("input[name='firstName']").clear().type(type)
    }

    enterEmployeeMiddleName(type){
        cy.get("input[name='firstName']").clear().type(type)
    }

    enterEmployeeMiddleName(type){
        cy.get("input[name='middleName']").clear().type(type)
    }

    enterEmployeeLastName(type){
        cy.get("input[name='lastName']").clear().type(type)
    }

}