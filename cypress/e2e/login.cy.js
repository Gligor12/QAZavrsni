/// <reference types="Cypress" />

describe("Vivify Scrum Login functionality", ()=>{

    it("Unsuccessfull login - wrong email", ()=>{
        
        cy.visit("/login");

        cy.get(".vs-c-auth-modal-body__heading").should("have.text" , "Log in with your existing account")

        cy.get("input[type='email']").type("gligor1@gmail.com");
        cy.get("input[type='password']").type("gligor12345");
        cy.get(".vs-c-btn--lg").eq(0).click();

        cy.get(".el-form-item__error").should("have.text", "Oops! Your email/password combination is incorrect");

    });

    it("Unsuccessfull login - wrong password", ()=>{
        
        cy.visit("/login");

        cy.get(".vs-c-auth-modal-body__heading").should("have.text" , "Log in with your existing account")

        cy.get("input[type='email']").type("gligor1@gmail.com");
        cy.get("input[type='password']").type("gligor12");
        cy.get(".vs-c-btn--lg").eq(0).click();

        cy.get(".el-form-item__error").should("have.text", "Oops! Your email/password combination is incorrect");

    });

    it("Unsuccessfull login - empty email and password", ()=>{
        
        cy.visit("/login");

        cy.get(".vs-c-auth-modal-body__heading").should("have.text" , "Log in with your existing account")

        cy.get("input[type='email']").type(" ");
        cy.get("input[type='password']").type(" ");
        cy.get(".vs-c-btn--lg").eq(0).click();

        cy.get("span").eq(0).should("have.text" , "The email field must be a valid email")
        cy.get("span").eq(1).should("have.text" , "The password field is required")

    });

    it("Successfull login", ()=>{

        cy.visit("/login");

        cy.get(".vs-c-auth-modal-body__heading").should("have.text" , "Log in with your existing account")

        cy.get("input[type='email']").type("gligor123@gmail.com");
        cy.get("input[type='password']").type("gligor12345");
        cy.get(".vs-c-btn--lg").eq(0).click();

        cy.url().should("contain" , "my-organizations");

        cy.get(".vs-u-text--uppercase").eq(0).should("have.text", "Organizations");
        cy.get(".vs-u-text--uppercase").eq(1).should("have.text", "My Organizations");


    });

});