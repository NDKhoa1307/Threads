import { Client, Databases, Functions } from 'appwrite';

const client = new Client();

const PROJECT_ID = import.meta.env.VITE_PROJECTID
const ENDPOINT = import.meta.env.VITE_ENDPOINT
export const DEV_DB_ID = import.meta.env.VITE_DB_ID
export const COLLECTION_ID_THREADS = import.meta.env.VITE_COLLECTION_ID_THREADS
export const FUNCTION_ID = import.meta.env.VITE_FUNCTION_ID

client
    .setEndpoint(ENDPOINT)
    .setProject(PROJECT_ID);

export const database = new Databases(client);
export const functions = new Functions(client);

export default client;