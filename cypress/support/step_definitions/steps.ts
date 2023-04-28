
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
  cy.get('#translations-vn-title').type('Nông sản');
  cy.get('#translations-vn-author').type('Nguyen Van A');
  cy.get('#translations-vn-summary').type('text1');
  cy.get('.codex-editor__redactor').type('text2');
 })
 When("User switch tab English and data in fields Tiêu đề, Tác giả, Giới thiệu, Nội dung", ()=>{
  cy.get('.ant-tabs-nav-list > :nth-child(2)').click();
  cy.get('#translations-en-title').type('Nong san');
  cy.get('#translations-en-author').type('Nguyen Van A');
  cy.get('#translations-en-summary').type('text1');
  cy.get('.codex-editor__redactor').type('texxt2');
 })
 When ("User Add Ảnh thumbanil",()=>{
    cy.get(':nth-child(2) > .ng-untouched > .flex > .relative > #undefined').selectFile('cypress/fixtures/image/image.jpg', { action: 'drag-drop' })
})
When ("User Enter data in fields Background Color, Custom CSS Class, Custom CSS",()=>{
  cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').click().type('#8AC653');
  cy.get('#customCSSClass').click().type('text-white');
  cy.get('#customCSS').click().type('line-height: 3rem !important; font-weight: 900 !important;font-style: italic !important; font-size: 1.5rem !important;  text-align: justify !important;')
 })
When ("User Click button Lưu lại",()=>{
  cy.get('#button-submit').click();
 })
 