const {
  defineParameterType,
  When,
  Then,
  Before,
  Given,
} = require("@badeball/cypress-cucumber-preprocessor");

Given("I get futurama info", () => {
  cy.getFuturamaInfo();
});

Given("I compare two array", () => {
  cy.arrayCompare();
});

Given("I compare two object", () => {
  cy.objectCompare();
});
Given("I get some text in table", () => {
  cy.getTextFromTable();
});
