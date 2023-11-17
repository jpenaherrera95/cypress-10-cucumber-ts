import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor'

Given('I open the website', () => {
    cy.visit('https://www.saucedemo.com/')
})