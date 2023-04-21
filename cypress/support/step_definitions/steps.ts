
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given("User opens {} Inmegers", (menu) => {
  cy.visit("/"); // Visits the baseUrl
    cy.get('.text-navbar > div a.text-red-600').contains(menu).should('have.length', 1);
    cy.intercept('https://r.stripe.com/0', (req) => {
        req.headers['origin'] = 'https://js.stripe.com'
    });
    cy.intercept('https://js.stripe.com/v3', (req) => {
        req.on('response', (res) => {
            res.body = res.body.replaceAll('window.top', 'window.self')
        })
    });
});

  When("Show modal login", () => {
    cy.get('#btn-login').click();
      cy.get('#login-google').should('be.visible');
  });
  And("User enter email {}", (email) => {
    cy.get('#input-email').type(email);
      cy.get('#input-email').should('have.value', email);
  });
  And("User enter password {}", (password) => {
    cy.get('#input-password').type(password)
      cy.get('#input-password').should('have.value', password);
  });
And("User submit Login", () => {
  cy.get('#btn-login').click()
    cy.get('.action-btn').should("have.length", 1);
});
And("User click account", () => {
 cy.get('.action-btn > .w-10 > .rounded-full').first().click();
 cy.get('.action-btn').should("have.length", 1);
});
 And("User click profile", () =>{
  cy.get('.ng-tns-c53-4 > .ng-star-inserted > .justify-between').click()
 });
 And("User click button Buyer", () =>{
 cy.get('.rounded-tr-lg').click()
 });
 And("User click on the Profile that the user want to edit",() =>{
  cy.get('.rounded-xl > :nth-child(1) > .px-5').click()
 });
 And("User click on the icon edit", () =>{
  cy.get('.la-pencil-alt').click()
 });
And("User click Become a Franchisee", ()=>{
    cy.get('.select-type > :nth-child(4) > .flex').click()
});
And("User click button {}", (text) =>{
    cy.get('[type="button"].bg-red-600:visible').contains(text).click();
});
And("User click text {}", (text) =>{
    cy.get('.text-red-600:visible').contains(text).click();
});
And("User enter data in the fields Last name", ()=>{
    cy.get('fieldset.ng-tns-c82-24 > .px-4').clear().type('Ho Thuy')
});
And("User enter data in the fields First name",()=>{
  cy.get('fieldset.ng-tns-c82-25 > .px-4').clear().type('Tien')
});
And("User enter data in the fields Email",() =>{
cy.get('.pt-5 > :nth-child(2) > :nth-child(2) input[formcontrolname="email"]').clear().type('htt@gmail.com')
});

And("User select {} in the fields Nationality", (value) =>{
 cy.get('.ant-select-selection-item').click()
  cy.get('[title="'+value+'"] > .ant-select-item-option-content').click()
    cy.get('nz-select-item').should('have.attr', 'title', value);
});
And("User enter data in the fields Phone Number", () => {
    cy.get('.ng-tns-c82-29 > .px-4').clear().type('0337789087')
});
And("User click button Next2", () => {
  cy.get('.flex-wrap > .text-white').click()
});
And("User slect {} Your title", (title) => {
  cy.get('.ng-tns-c82-31 > .ant-select > .ant-select-selector > .ant-select-selection-item').click()
  cy.get('[title="'+title+'"] > .ant-select-item-option-content').first().click()
  cy.get('.ng-tns-c82-31 > .ant-select > .ant-select-selector > .ant-select-selection-item').should('have.attr', 'title', title);
});
And("User select {} Main industry", (industry) => {
  cy.get('.ng-tns-c82-33> .ant-select > .ant-select-selector > .ant-select-selection-item').click()
  cy.get('[title="'+industry+'"] > .ant-select-item-option-content').first().click()
  cy.get('.ng-tns-c82-33> .ant-select > .ant-select-selector > .ant-select-selection-item').should('have.attr', 'title', industry);
});
And("User select {} Other industries", (industries) => {
  cy.get('fieldset.ng-tns-c82-35 > .ant-select > .ant-select-selector').click()
  cy.get('[title="'+industries+'"] > .ant-select-item-option-content').first().click()
});
And("User enter data in the fileds Name of service product to be franchised", () => {
cy.get('fieldset.ng-tns-c82-37 > .px-4').clear().type('Đồ uống')
});
And("User enter data in the Estimated budget range", () => {
  cy.get('fieldset.ng-tns-c82-47 > .px-4').clear().type('100')
  cy.get('fieldset.ng-tns-c82-49 > .px-4').clear().type('1000')
});
And("User select Your current location", () => {
  cy.get('fieldset.ng-tns-c82-51 > .ant-select > .ant-select-selector > .ant-select-selection-item > .ant-select-selection-item-remove').click()
 cy.get('fieldset.ng-tns-c82-51 > .ant-select > .ant-select-selector').click().type('Afghanistan{enter}')
});
And("User select Location you want to receive franchise from", () => {

  cy.get('fieldset.ng-tns-c82-38 > .ant-select > .ant-select-selector > .ant-select-selection-item > .ant-select-selection-item-remove').click()
  cy.get('fieldset.ng-tns-c82-38 > .ant-select > .ant-select-selector').click().type('Afghanistan{enter}')
});
And("User enter data in the fileds Your company name", () => {
  cy.get('fieldset.ng-tns-c82-40 > .px-4').clear().type('HTT')
});
And("User enter data in the fileds Website or social media", () => {
  cy.get('.ng-tns-c82-41 > .px-4').clear().type('https://geneat.vn/')
});
And("User enter data in the fileds Industry of your business", () => {
  cy.get('.ng-tns-c82-42 > .px-4').clear().type('coffe')
});
And("User enter data in the fileds Expected criterials from franchisor", () => {
  cy.get('.ng-tns-c82-42 > .px-4').clear().type('Tốt')
});
And("User enter data in the fileds About your business", () => {
  cy.get('fieldset.ng-tns-c82-44 > .h-28').clear().type('Giàu')
});
And("User click button {}", (text) =>{
  cy.get('[type="button"].bg-red-600:visible').contains(text).click();
});
And("User click text {}", (text) =>{
  cy.get('.text-red-600:visible').contains(text).click();
});
And("User click button {}", (text) =>{
  cy.get('[type="button"].bg-red-600:visible').contains(text).click();
});
And("User click text {}", (text) =>{
  cy.get('.text-red-600:visible').contains(text).click();
});
   And("User Select package payment", () =>{
   cy.get('.pt-5 > .justify-between > .flex-wrap > :nth-child(2)').click()
   });
  //  And("User confirm Payment", () =>{
  //   cy.get('.ant-form-item-control-input-content > .flex > .ng-untouched > .ant-switch > .ant-switch-handle').click()
  //   });
   And("User click button Thanh toán", () =>{
    cy.get('.mb-1 > .text-white').click()
   });
   And("User Click button Accept payment",()=>{
   cy.get('.px-5 > .pt-5 > :nth-child(2)').click()
   });