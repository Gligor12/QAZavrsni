class CreateBoard{
    get boardTitle(){
        return cy.get("input[name='name']");
    }

    createBoardFunc(title){
        this.boardTitle.type(title);

        cy.get("button[name='next_btn']").click();
        cy.get("span[name='type_scrum']").click();
        cy.get("button[name='next_btn']").click();
        cy.get("button[name='next_btn']").click();
        cy.get("button[name='next_btn']").click();
        cy.get("button[name='next_btn']").click();
    }
}

export const createBoard = new CreateBoard();