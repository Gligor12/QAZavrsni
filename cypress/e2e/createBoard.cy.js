/// <reference types="Cypress" />

import { loginUser } from "../page_objects/loginPage";
import { createBoard } from "../page_objects/createBoardPage";

describe("Create new board functionality" , ()=>{
beforeEach(()=>{
    cy.visit("/login");

    loginUser.loginUserFunc("gligor123@gmail.com" , "gligor12345");
});

it("Create and delete new board", ()=>{

    // Create board
    cy.get("li[title='Add new Board']").click();

    createBoard.createBoardFunc("New board");
    

    // Check new board
    cy.url().should("contain" , "boards");
    cy.get(".vs-l-project__title").children().eq(2).should("have.text", "New board");
    
    //Delete board
    cy.get(".vs-c-site-logo").eq(10).click();
    cy.url().should("contain" ,"settings");
    cy.get(".vs-c-btn--spaced").eq(2).click();
    cy.get(".vs-c-modal__header").children().should("have.text" , "Confirm Your Action")
    cy.get("button[name='save-btn']").click();

    cy.url().should("not.contain" ,"settings");
    cy.get(".vs-l-project__title").should("not.exist");


});
})