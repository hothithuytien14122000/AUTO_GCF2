
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";
import { when } from "cypress/types/jquery";

Given("User opens {} Gcf2", (menu) => {
  cy.visit("/"); // Visits the baseUrl
});
  When("User enter email {}", (email) => {
    cy.get('#username').type(email);
    cy.get('#username').should('have.value', email);
  });
  When("User enter Password {}", (password) => {
    cy.get('#password').type(password)
    cy.get('#password').should('have.value', password);
  });
 When ("User click submit Login", (login) =>{
  cy.get('#button-submit').click();
 })