import { NextRequest, NextResponse } from "next/server";
import {client, tables} from "@/lib/appwrite/appwrite";
import { ID , Query} from "node-appwrite";


export async function GET(
  request: Request,
  { params }: { params: { slug: string } }
)  {
    try {
        const { slug } = params;
        console.log('Fetching blog with slug:', slug);
        const response = await tables.listRows( process.env.APPWRITE_DATABASE_ID!, process.env.APPWRITE_TABLE_ID!, [
            Query.equal('slug', slug)
        ]);
        if (response.rows.length === 0) {
            return NextResponse.json({ error: 'Blog not found' }, { status: 404 });
        }
        console.log('Fetched blog:', response.rows[0]);
        return NextResponse.json(response.rows[0], { status: 200 });
    } catch (error) {
        console.error('Error fetching blog:', error);
        return NextResponse.json({ error: 'Failed to fetch blog' }, { status: 500 });
    }
}