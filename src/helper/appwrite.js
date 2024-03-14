import { Account, Client } from 'appwrite';

const client = new Client();

client
    .setEndpoint('https://cloud.appwrite.io/v1')
    .setProject('65f32c6539fecb40765c');

const account = new Account(client);

const getCurrentUser = async () => {
    const promise = account.get();
    const result = promise
        .then((user) => {
            return user;
        })
        .catch(() => {
            return null;
        });
    return result;
};

export { account, client , getCurrentUser};