// Import necessary dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '@/utils/db';
import { Program } from '@/models/schema';
import { NextResponse } from "next/server"; 

export async function POST(req) {
    const { name, owner, description } = await req.json();
    await connect();
    const program = await Program.create({ name, owner, description });
    return NextResponse.json({ message: "Program created", program }, { status: 201 });
}

export async function GET() {
    await connect();
    const programs = await Program.find();
    return NextResponse.json({ programs });
}
