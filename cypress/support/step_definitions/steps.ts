
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
 When ("User click submit Login", () =>{
  cy.get('#button-submit').click();
 })
When("User click Long form", ()=>{
  cy.get('.relative > :nth-child(2) > :nth-child(2) > .truncate').click()
 })
When("User click Add new", ()=>{
  cy.get('#undefined').click()
 })
//  When("User select Chuyên mục", ()=>{
//   cy.get('#categoryId > .ant-select-arrow').click();
//  })
 When("User enter data file Tiêu đề, Tác giả, Giới thiệu, Nội dung", ()=>{
  cy.get('#translations-vn-title').type('hahhahahahahahhahh');
  cy.get('#translations-vn-author').type('Nguyeenx Vawn A');
  cy.get('#translations-vn-summary').type('text1');
  cy.get('.codex-editor__redactor').type('texxt2');
 })
 When("User switch tab English and data in fields Tiêu đề, Tác giả, Giới thiệu, Nội dung", ()=>{
  cy.get('.ant-tabs-nav-list > :nth-child(2)').click();
  cy.get('#translations-en-title').type('hihihiiihihihihihih');
  cy.get('#translations-en-author').type('Nguyeenx Vawn A');
  cy.get('#translations-en-summary').type('text1');
  cy.get('.codex-editor__redactor').type('texxt2');
 })