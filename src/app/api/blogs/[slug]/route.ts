import { NextResponse } from "next/server";
import { tables } from "@/lib/appwrite/appwrite";
import { Query } from "node-appwrite";

export async function GET(
  request: Request,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const { slug } = await params;
    console.log("Fetching blog with slug:", slug);

    const response = await tables.listRows(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_ID!,
      [Query.equal("slug", slug)]
    );
    if (response.rows.length === 0) {
      return NextResponse.json({ error: "Blog not found" }, { status: 404 });
    }
    const blog = response.rows[0];

    // Increment views
    await tables.updateRow(
      process.env.APPWRITE_DATABASE_ID!,
      process.env.APPWRITE_TABLE_ID!,
      blog.$id,
      { views: (blog.views || 0) + 1 }
    );

    return NextResponse.json(
      { ...blog, views: (blog.views || 0) + 1 },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error fetching blog:", error);
    return NextResponse.json(
      { error: "Failed to fetch blog" },
      { status: 500 }
    );
  }
}
