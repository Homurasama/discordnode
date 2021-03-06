"use strict";
const Client = require("./lib/Client");
const WebhookClient = require("./lib/webhook/WebhookClient")

function Discord(token, options) {
    /* Discord Node client */
    return new Client(token, options)
}

Discord.Client = Client;
Discord.Webhook = WebhookClient;

module.exports = Discord;
