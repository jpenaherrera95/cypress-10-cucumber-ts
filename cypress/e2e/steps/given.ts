import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import pages from '../pages/interfaces'
import test from '../pages/login/login.page'

let object = new test();

Given('I open the website and login with env variables', () => {
    cy.visit('/');
    let pageObject = pages[`loginPage`];
    //pageObject.login('standard_user','secret_sauce');
    //object.login('Katharina_Bernier','s3cret');
    pageObject.login(Cypress.env('account').username,Cypress.env('account').password);
})