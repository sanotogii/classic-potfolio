import {Client, Users, ID, TablesDB} from 'node-appwrite';

let client: Client | undefined;

// Lazy so builds don't need runtime env (Next imports route modules during build).
function getClient() {
    client ??= new Client()
        .setEndpoint(process.env.APPWRITE_ENDPOINT!)
        .setProject(process.env.APPWRITE_PROJECT!)
        .setKey(process.env.APPWRITE_KEY!);
    return client;
}

export function getTables() {
    return new TablesDB(getClient());
}

// Export a function to create users
export const createUser = async (email: string, phone: string, password: string, name: string) => {
    try {
        const response = await new Users(getClient()).create(ID.unique(), email, phone, password, name);
        console.log('User created successfully:', response);
        return response;
    } catch (error) {
        console.error('Error creating user:', error);
        throw error;
    }
};

export { ID };
