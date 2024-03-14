import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f32c6539fecb40765c');

const account = new Account(client);

export { account, client};