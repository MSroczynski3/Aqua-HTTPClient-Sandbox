const currencies = [
    "EUR",
    "USD",
    "PLN",
    "XAF",
    "ASD"
]
const id = Math.floor(Math.random() * (currencies.length - 1));
client.global.set("random.currency", currencies[id]);

