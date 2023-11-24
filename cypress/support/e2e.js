/*
Create new cy command to get Futurama info 
- check if result status is 200 
- check if result is array with 1 element
- check if the first element in result has id  equal to 1
*/

Cypress.Commands.add("getFuturamaInfo", () => {
  const headers = {};
  const qs = {};

  return cy
    .request({
      method: "GET",
      url: "https://api.sampleapis.com/futurama/info",
      qs,
      body: null,
      headers,
      failOnStatusCode: false,
    })
    .then((response) => {
      expect(response.status).to.equal(200);
      expect(response.body.length).to.equal(1);
      expect(response.body[0].id).to.equal(1);
      return response;
    });
});
