import { NextRequest, NextResponse } from "next/server";
import {client, tables} from "@/lib/appwrite/appwrite";
import { ID } from "node-appwrite";

export type blog = {
    title: string;
    content: string;
    slug: string;
    description?: string;
    tags?: string[];
    views?: number;
};


export async function GET(request: NextRequest) {

    try {
        const response = await tables.listRows(process.env.APPWRITE_DATABASE_ID!, process.env.APPWRITE_TABLE_ID!);
        console.log('Fetched blogs:', response);
        return NextResponse.json(response.rows, { status: 200 });
    } catch (error) {
        console.error('Error fetching blogs:', error);
        return NextResponse.json({ error: 'Failed to fetch blogs' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        const raw = await request.text();
        const blog = JSON.parse(raw);
        console.log('Received blog:', blog);
        // if (!blog.title || !blog.content || !blog.slug) {
        //     return NextResponse.json({ error: 'Title, content, and slug are required' }, { status: 400 });
        // }
        const response = await tables.createRow(
            process.env.APPWRITE_DATABASE_ID!,
            process.env.APPWRITE_TABLE_ID!,
            ID.unique(),
            blog
        );
        // console.log('Creating blog with blog:', blog);
        // console.log('Blog created successfully:', response);
        return NextResponse.json(response, { status: 201 });
    } catch (error) {
        // console.error('Error creating blog:', error);
        return NextResponse.json({ error: 'Failed to create blog' }, { status: 500 });
    }
}

export async function DELETE(request: NextRequest) {
    try {
        const raw = await request.text();
        const { id } = JSON.parse(raw);
        // if (!id) {
        //     return NextResponse.json({ error: 'ID is required' }, { status: 400 });
        // }
        const response = await tables.deleteRow(
            process.env.APPWRITE_DATABASE_ID!,
            process.env.APPWRITE_TABLE_ID!,
            id
        );
        return NextResponse.json({ message: 'Blog deleted successfully', response }, { status: 200 });
    } catch (error) {
        console.error('Error deleting blog:', error);
        return NextResponse.json({ error: 'Failed to delete blog' }, { status: 500 });
    }
}

