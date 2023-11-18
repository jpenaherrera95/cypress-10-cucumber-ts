const SELECTORS: {[key: string]: string} = {
    inputUserName: `#username`, //CSS id selector
    inputPassword: `#password`, //XPATH id selector
    buttonLogin: `button[data-test='signin-submit']` //CSS selector
};

class loginPage {
    async login(username: string, password: string){
        this.clearAndType(username,'inputUserName')
        this.clearAndType(password,'inputPassword')
        cy.get(SELECTORS['buttonLogin']).click()
    }

    async clearAndType(data: string, selector: string){
        cy.get(SELECTORS[selector]).clear().type(data)
    }
}

export default loginPage