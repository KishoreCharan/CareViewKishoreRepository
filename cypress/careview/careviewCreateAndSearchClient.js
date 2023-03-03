/// <reference types="cypress" />
describe('CareViewCreateAndSearchClient', () => {
      before('navigating to site', () => {
            cy.visit('https://webapp-ae-automation-dev.azurewebsites.net/login')
            cy.get('#txtUsername').type("arun.kumar@careviewapp.com");
            cy.get('#txtPassword').type("Demo1234@", { log: false });
            cy.get("#btnLogin").click();
            Cypress.on('uncaught:exception', (err, runnable) => {        
            return false;
           });
          });  
      it('Create Client', () => {

                    cy.get("#side-menu > li").contains(" CRM ").click();
                    cy.get("ul > li").contains("Clients").click();
                    cy.get("#clients").contains("Create New").click();
                    cy.get("#firstName").type("John");
                    cy.get("#lastName").type("Avatar");
                    cy.get("#gender").select("Male");
                    cy.get("#dob").type("04/02/2023");
                    cy.get("#address1").type("Coora Street");
                    cy.get("#suburb").type("Wishart");
                    cy.get("#state").select("QLD");
                    cy.get("#postcode").type("4122");
                    cy.get("#btnSaveNewClient").contains("Save").click();                             
                    cy.wait(3000);
                    cy.get(".filter").find(".bs-searchbox").find(".form-control").type("John Avatar",{force:true});
                    cy.get("span.text").contains("John Avatar").first().click();
                    cy.get("table > tbody > tr > td > a").contains("John").should('be.visible');
                    cy.get("table > tbody > tr > td > a").contains("Avatar").should('be.visible');
                    cy.get("table > tbody > tr > td > a").contains("Active").should('be.visible');                             
                  });
                });
 