client.test("Response status code is 200", () => {
    client.assert(response.status === 200, "Response status is not 200!");
})

client.test("Response type is JSON", () => {
    const type = response.contentType.mimeType;
    client.assert(type === "application/json", "Expected 'application/json' but received '" + type + "'");
})

client.test("Response body is not empty", () => {
    client.assert(response.body, "Response body is empty!");
})

client.test("Countries data maintain integrity (sanity check)", () => {
    response.body.data.countries.forEach((country, index) => {
        // Required fields checks
        client.assert(country.name && typeof country.name === 'string', `Invalid or missing 'name' in entry ${index}`);
        client.assert(country.code && typeof country.code === 'string', `Invalid or missing 'code' in entry ${index}`);
        client.assert(country.currency && typeof country.currency === 'string', `Invalid or missing 'currency' in entry ${index}`);
        // Format checks
        client.assert(country.currency === country.currency.toUpperCase(), `Currency code should be uppercase in entry ${index}`);
    });
})