import loginPage from './login/login.page'

export interface pageObjects {
    loginPage: loginPage;
}

const pages: pageObjects = {
    loginPage: new loginPage(),
}

export default pages;