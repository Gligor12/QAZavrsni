class LoginUser {
    get userEmail(){
       return cy.get("input[type='email']");
    }

    get userPassword(){
        return cy.get("input[type='password']");
    }

    loginUserFunc(email , password){
        this.userEmail.type(email);
        this.userPassword.type(password);

        cy.get(".vs-c-btn--lg").eq(0).click();
    }
}

export const loginUser = new LoginUser();