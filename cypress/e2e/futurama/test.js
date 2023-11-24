const {
  defineParameterType,
  When,
  Then,
  Before,
  Given
} = require("@badeball/cypress-cucumber-preprocessor");


Given("I get futurama info", () => {
  cy.getFuturamaInfo()
});