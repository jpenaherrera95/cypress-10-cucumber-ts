import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'
import pages from '../pages/interfaces'

Given('I open the website and login with env variables', () => {
    cy.visit('/');
    let pageObject = pages[`loginPage`];
    pageObject.login(Cypress.env('account').username,Cypress.env('account').password);
})