
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
    cy.get('#password').type(password);
    cy.get('#password').should('have.value', password);
  });
 When ("User click submit Login", () =>{
  cy.get('#button-submit').click();
 })
When("User Click the button Add new", ()=>{
  cy.get('#undefined').click();
 })
When("User Select Category", ()=>{
  cy.get('#categoryId > .ant-select-selector > .ant-select-selection-search').click();
  cy.get('[title="Press release"] > .ant-select-item-option-content').click();
 })
 When("User Enter data in fields Title {}", (Title)=>{
  cy.get('#translations-vn-title').click().clear().type(Title);
  cy.get('#translations-vn-title').should('have.value', Title);
 })
  When("User Enter data in fields Author {}", (Author)=>{
  cy.get('#translations-vn-author').click().clear().type(Author);
  cy.get('#translations-vn-author').should('have.value',Author);
  })
  When("User Enter data in fields Introduce {}", (Introduce)=>{
  cy.get('#translations-vn-summary').click().clear().type(Introduce);
  cy.get('#translations-vn-summary').should('have.value',Introduce);
  })
  When("User Enter data in fields Content {}", (Content)=>{
  cy.get('.codex-editor__redactor').click().clear().type(Content);
 })
 When("User Switch the tab to English", ()=>{
  cy.get('.ant-tabs-nav-list > :nth-child(2)').click();
 })
 When("User Enter English data in the fields Title {}", (TitleEnglish)=>{
  cy.get('#translations-en-title').click().clear().type(TitleEnglish);
  cy.get('#translations-en-title').should('have.value', TitleEnglish);
 })
  When("User Enter English data in fields Author {}", (AuthorEnglish)=>{
  cy.get('#translations-en-author').click().clear().type(AuthorEnglish);
  cy.get('#translations-en-author').should('have.value',AuthorEnglish);
  })
  When("User Enter English data in fields Introduce{}", (IntroduceEnglish)=>{
  cy.get('#translations-en-summary').click().clear().type(IntroduceEnglish);
  cy.get('#translations-en-summary').should('have.value',IntroduceEnglish);
  })
  When("User Enter English data in fields Content {}", (ContentEnglish)=>{
  cy.get('.codex-editor__redactor').click().clear().type(ContentEnglish);
 })
 When ("User Add thumbanil",()=>{
    cy.get(':nth-child(2) > .ng-untouched > .flex > .relative > #undefined').selectFile('cypress/fixtures/image/image.jpg', { action: 'drag-drop' })
})
When ("User Enter data in fields Background Color {}",(BackgroundColor)=>{
  cy.get(':nth-child(1) > .ant-row > .ant-form-item-control > .ant-form-item-control-input > .ant-form-item-control-input-content > .ant-input').click().clear().type(BackgroundColor);
})
When ("User Enter data in fields Custom CSS Class {}",(CustomCSSClass)=>{
  cy.get('#customCSSClass').click().clear().type(CustomCSSClass);
  cy.get('#customCSSClass').should('have.value',CustomCSSClass);
})
// When ("User Enter data in fields Custom CSS {}",(CustomCSS)=>{
//   cy.get('#customCSS').click().clear().type(CustomCSS);
//   cy.get('#customCSS').should('have.value',CustomCSS);
//  })
And ("User Click the button Save",()=>{
  cy.get('#button-submit').click();
  cy.get('#button-submit').should('be.visible');
 })
 When ("User Click the button Edit",()=>{
  cy.get(':nth-child(1) > [align="center"] > :nth-child(2)').click();
 })
 When("User edit Category", ()=>{
  cy.get('#categoryId > .ant-select-selector > .ant-select-selection-item').click();
  cy.get('[title="Longform"] > .ant-select-item-option-content').click();
 })
 When("User edit Title {}", (Title)=>{
  cy.get('#translations-vn-title').click().clear().type(Title);
  cy.get('#translations-vn-title').should('have.value', Title);
 })
  When("User edit Author {}", (Author)=>{
  cy.get('#translations-vn-author').click().clear().type(Author);
  cy.get('#translations-vn-author').should('have.value',Author);
  })
  When("User edit Introduce {}", (Introduce)=>{
  cy.get('#translations-vn-summary').click().clear().type(Introduce);
  cy.get('#translations-vn-summary').should('have.value',Introduce);
  })
  When("User edit Content {}", (Content)=>{
  cy.get('.codex-editor__redactor').click().clear().type(Content);
 })