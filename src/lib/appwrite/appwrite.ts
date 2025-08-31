import {Client, Users, ID, TablesDB} from 'node-appwrite';

// Initialize the client for server-side operations
const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT!)
    .setKey(process.env.APPWRITE_KEY!);

// Create the users service for user management
const users = new Users(client);

// Create the databases service for blog posts
const tables = new TablesDB(client);

// Export a function to create users
export const createUser = async (email: string, phone: string, password: string, name: string) => {
    try {
        const response = await users.create(ID.unique(), email, phone, password, name);
        console.log('User created successfully:', response);
        return response;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

// Export the client and users for other operations
export { client, users, tables, ID };