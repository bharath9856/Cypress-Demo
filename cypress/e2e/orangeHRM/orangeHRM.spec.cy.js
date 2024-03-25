///<reference types = "cypress"/>
import { CommonPage } from "../orangeHRMPageObject/commonPage"; 
import { PIMPage } from  "../orangeHRMPageObject/pimPage";

const commonPage = new CommonPage();
const pimPage = new PIMPage();


describe("Orange HRM", () => {

    before(()=>{
        cy.login("Admin","admin123")
    })

    beforeEach(()=>{
        cy.visit("/web/index.php/dashboard/index")
    })

    it("User should navigate to dashboard",()=>{
        commonPage.assertHeaderTitle().should("include.text","Dashboard");
    })

    it("User should add employee in PIM",()=>{
        commonPage.selectSidebarMenu("PIM");
        commonPage.assertHeaderTitle().should("include.text","PIM");
        commonPage.roleNavigation("Add Employee");
        pimPage.enterEmployeeFirstName("Bharath");
        pimPage.enterEmployeeMiddleName("Simha Reddy")
        pimPage.enterEmployeeLastName("Challa")
        commonPage.clickButtonByName("Save")


    })

    it("Nagative scenario, User should validate unimpliment header title",()=>{
        commonPage.assertHeaderTitle().should("have.text","");
    })



    after(()=>{
        cy.wait(1000)
        commonPage.clickOnUserDropdown();
        commonPage.selectUserDropdownList("Logout")
        cy.wait(1000)
        Cypress.session.clearAllSavedSessions()
        
    })


});
