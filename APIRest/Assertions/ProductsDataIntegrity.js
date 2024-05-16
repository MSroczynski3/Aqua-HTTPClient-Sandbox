client.test("Products data maintain integrity (sanity check)", () => {
    client.assert(response.body.title && typeof response.body.title === 'string', `The property 'title' should be a non-empty string`);
    client.assert(response.body.description && typeof response.body.description === 'string', `The property 'description' should be a non-empty string`);
    client.assert(typeof response.body.brand === 'string', `The property 'brand' should be a string`);
    client.assert(typeof response.body.category === 'string', `The property 'category' should be a string`);
    client.assert(typeof response.body.thumbnail === 'string', `The property 'thumbnail' should be a string`);
    client.assert(response.body.price >= 0 && typeof response.body.price === 'number', `The property 'price' should be an a non-negative number`);
    client.assert(response.body.discountPercentage >= 0 && typeof response.body.discountPercentage === 'number', `The property 'discountPercentage' should be an a non-negative number`);
    client.assert(response.body.rating >= 0 && typeof response.body.rating === 'number', `The property 'rating' should be an a non-negative number`);
    client.assert(response.body.stock >= 0 && typeof response.body.stock === 'number', `The property 'stock' should be an a non-negative number`);
    // This will return true even if the array is empty: {"images" : []}
    client.assert(Array.isArray(response.body.images), "The property 'Images' should be an array");
})
