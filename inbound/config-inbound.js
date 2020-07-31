config={};

config.voice_server_host = 'api.enablex.io';
config.voice_server_port = 443;
config.path = '/voice/v1/calls';
config.app_id = 'app_id';
config.app_key = 'app_key';
config.ngrok = false;
config.webhook_host = 'webhook.example.io'; // Needs to provide if ngrok = false
config.webhook_port = 443;
config.certificate = {
    ssl_key: "/certs/example.key",               // Path to .key file
    ssl_cert : "/certs/example.crt",             // Path to .crt file
    ssl_ca_certs : ["/certs/example.ca-bundle"]    // Path to CA[chain]
};

var module = module || {};
module.exports = config;
