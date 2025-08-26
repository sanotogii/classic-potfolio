import {Client, Users, Databases, ID, Query} from 'node-appwrite';

// Initialize the client for server-side operations
const client = new Client()
    .setEndpoint(process.env.APPWRITE_ENDPOINT!)
    .setProject(process.env.APPWRITE_PROJECT!)
    .setKey(process.env.APPWRITE_KEY!);

// Create the users service for user management
const users = new Users(client);

// Create the databases service for blog posts
const databases = new Databases(client);

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

// Database configuration
const DATABASE_ID = '68ab3a2f00097650996e'; // Your blogs database ID
const COLLECTION_ID = '68ab3a3d002153a783f1'; // You'll need to replace this with your actual collection ID

// Export function to get all posts from Appwrite database
export const getPosts = async () => {
    try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID);
        console.log('Posts fetched successfully:', response);
        return response.documents.map((doc: any) => ({
            slug: doc.slug,
            title: doc.title,
            description: doc.content ? doc.content.substring(0, 150) + '...' : '', // Use content as description preview
            date: doc.createdAt,
            likes: 0, // Default value, you can add this field to your database later
            content: doc.content,
            tags: doc.tags || [],
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt,
            $id: doc.$id
        }));
    } catch (error) {
        console.error('Error fetching posts:', error);
        throw error;
    }
};

// Export function to get a single post by slug
export const getPostBySlug = async (slug: string) => {
    try {
        const response = await databases.listDocuments(DATABASE_ID, COLLECTION_ID, [
            Query.equal('slug', slug)
        ]);
        
        if (response.documents.length === 0) {
            throw new Error(`Post with slug "${slug}" not found`);
        }
        
        const doc = response.documents[0];
        console.log('Post fetched successfully:', doc);
        return {
            $id: doc.$id,
            title: doc.title,
            content: doc.content,
            slug: doc.slug,
            tags: doc.tags || [],
            createdAt: doc.createdAt,
            updatedAt: doc.updatedAt
        };
    } catch (error) {
        console.error('Error fetching post by slug:', error);
        throw error;
    }
};



// Export the client and users for other operations
export { client, users, databases, ID };