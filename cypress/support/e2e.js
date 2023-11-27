/*
Create new cy command named 'getFuturamaInfo' to get Futurama info 
- check if result status is 200 
- check if result is array with 1 element
- check if the first element in result has id  equal to 1

To run open new terminal and run npx cypress run --e2e

*/
Cypress.Commands.add("getFuturamaInfo", () => {});

/*
Create new cy command named arrayCompare
- Given a first array [{"name":"a"},{"name":"b"}] 
- Given a second array [{"name":"b"},{"name":"c"}] 
- Check if two array have the same values 

To run open new terminal and run npx cypress run --e2e

*/
Cypress.Commands.add("arrayCompare", () => {
  const a = [{ name: "a" }, { name: "b" }];
  const b = [{ name: "b" }, { name: "a" }];
});

/*
Create new cy command named objectCompare
- Given a first object {"a":1,"b":2,"c":"3"}
- Given a second array {"b":2,"c":"3","a":1}
- Check if two object have the same values 

To run open new terminal and run npx cypress run --e2e

*/
Cypress.Commands.add("objectCompare", () => {
  const a = { a: 1, b: 2, c: 3 };
  const b = { b: 2, c: 3, a: 1 };
});

/**
 * Create new cy command named getTextFromTable
 * Got to https://www.w3schools.com/html/html_tables.asp
 * Retrive the Country of the Ernst Handel Company (the value in the third row, third column)
 *
 * To run open new terminal and run npx cypress run --e2e
 */

Cypress.Commands.add("getTextFromTable", () => {});
