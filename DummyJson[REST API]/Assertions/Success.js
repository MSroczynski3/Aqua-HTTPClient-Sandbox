client.test("Response status is 200", () => {
    client.assert(response.status === 200, "Response status is not 200!");
})

client.test("Response type is JSON", () => {
    const type = response.contentType.mimeType;
    client.assert(type === "application/json", "Expected 'application/json' but received '" + type + "'");
})

client.test("Response body is not empty", () => {
    client.assert(response.body, "Response body is empty!");
})