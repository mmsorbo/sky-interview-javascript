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
- Given expected array [{"name":"a"},{"name":"b"}] 
- Given result array [{"name":"b"},{"name":"c"}] 
- Check if two array have the same values 

To run open new terminal and run npx cypress run --e2e

*/
Cypress.Commands.add("arrayCompare", () => {
  const expected = [{ name: "a" }, { name: "b" }];
  const result = [{ name: "b" }, { name: "a" }];
});

/*
Create new cy command named objectCompare
- Given expected object {"a":1,"b":2,"c":"3"}
- Given result object {"b":2,"c":"3","a":1}
- Check if two object have the same values 

To run open new terminal and run npx cypress run --e2e

*/
Cypress.Commands.add("objectCompare", () => {
  const expected = { a: 1, b: 2, c: 3 };
  const result = { b: 2, c: 3, a: 1 };
});

/**
 * Create new cy command named getTextFromTable
 * Got to https://www.w3schools.com/html/html_tables.asp
 * Retrive the Country of the Ernst Handel Company (the value in the third row, third column)
 *
 * To run open new terminal and run npx cypress run --e2e
 */

Cypress.Commands.add("getTextFromTable", () => {});
