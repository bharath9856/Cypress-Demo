///<reference types = "cypress"/>
import { CommonPage } from "../orangeHRMPageObject/commonPage"; 
import { LeavePage } from  "../orangeHRMPageObject/leavePage";

const commonPage = new CommonPage();
const leavePage = new LeavePage();


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

    it("User should Apply the leave",()=>{
        commonPage.selectSidebarMenu("Leave");
        commonPage.assertHeaderTitle().should("include.text","Leave");
        leavePage.roleNavigation("Apply");
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
