/// <reference types="Cypress" />

import { loginUser } from "../page_objects/loginPage"; 
import { createBoard } from "../page_objects/createBoardPage";

let boardId;
let token;
describe("Delete board Via API",()=> {
    
    before( ()=>{
        cy.visit("/login");
        loginUser.loginUserFunc("gligor123@gmail.com" , "gligor12345");
        
        cy.get("li[title='Add new Board']").click();
        cy.intercept(
            "POST",
            "https://cypress-api.vivifyscrum-stage.com/api/v2/boards"
        ).as("createBoard");
        
        
       
        createBoard.createBoardFunc("New Board");

        cy.wait("@createBoard").then(intercept =>{
            boardId=intercept.response.body.id;
            token = window.localStorage.getItem("token");
        });
       
    });

    it("Delete board", ()=>{

       cy.deleteBoard(boardId,token);
       cy.visit("/my-organizations");
    });
});