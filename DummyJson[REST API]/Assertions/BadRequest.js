client.test("Response status is 400", () => {
    client.assert(response.status === 400, "Response status is not 400!");
})

client.test("Response type is JSON", () => {
    const type = response.contentType.mimeType;
    client.assert(type === "application/json", "Expected 'application/json' but received '" + type + "'");
})

client.test("Response body is not empty", () => {
    client.assert(response.body, "Response body is empty!");
})

client.test("The message returned by the API is correct", () => {
    const expectedMessage = "Placeholder for bad request message";
    client.assert(response.body.message === expectedMessage, `The error message should be ` + expectedMessage);
})