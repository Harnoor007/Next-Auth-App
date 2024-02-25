// Import necessary dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '@/utils/db';
import { Organization } from '@/models/schema';
import { NextResponse } from "next/server"; 

export async function POST(req) {
    const {name, vision, mission} = await req.json();
    await connect();
    await Organization.create({name, vision, mission});
    return NextResponse.json({message: "organization created"}, {status: 201});
}

export async function GET(){
    await connect();
    const organizations = await Organization.find();
    return NextResponse.json({ organizations });
}

