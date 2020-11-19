# **Basic Client Examples to demonstrate Outbound, Inbound & Broadcast Calls using Enablex Voice APIs. **
This example contains instructions how users can initiate Outbound, Inbound & Broadcast Calls.

## Prerequisite
- You will need Enablex Application credentials, app_id and app_key. To find credentials, register with EnableX (https://portal.enablex.io/cpaas/trial-sign-up/).
- You will need to configure the phone number you purchased from Enablex.
- You will need a place for hosting this application either cloud or local machine.


## Installation
git clone repo url
cd git directory
cd client_examples
npm install

## Setting up configurations.
- Add app_id and app_key & other parameters in config file.
- For Outbound call client, change configs in config-outbound.js
- For Inbound call client, change configs in config-inbound.js
- For Broadcast call client, change configs in config-broadcast.js
- For Inbound Calls
  - User needs to update the WebHook URL in the portal to receive WebHook events. The Webhook url needs to be publically reachable URL. If you are running your 
    server in public environment, please update the web hook URL. If you are running it in local, you can make use of the ngrok options from the configuration 
    options. Anytime your Webhook URL changes, you need to update the event url in the portal to receive calls.
  - For Inbound calls, User needs to configure action_on_connect.

## Webhook security
- Webhook security is also implemented as part of the voice service APIs. 
- Enablex Voice Server does encryption of Webhook payload using 'md5' encryption and app_id as key.
- Client needs to do decryption of payload using app_id provided by Enablex and algorithm, format, encoding parameters present in x-algoritm, x-format and x-encoding header.
- Please refer to the documentation and examples for proper way of handling Webhook payloads.

## Starting the client application script
- For Outbound Calls, cd outbound
  node client-outbound.js
- For Inbound Calls, cd inbound
  node client-inbound.js
- For Broadcast Calls, cd broadcast
  node client-broadcast.js
