// Import necessary dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '@/utils/db';
import { Program, Department } from '@/models/schema';
import { NextResponse } from "next/server"; 

export async function POST(req) {
    const { name, owner, description, deptId, pId } = await req.json();
    await connect();
 
    // Check if the provided departmentId exists in the Department collection
    const departmentExists = await Department.findOne({ deptId: deptId });
    if (!departmentExists) {
        return NextResponse.json({ message: "Department with the provided ID not found" }, { status: 404 });
    }

    // Check if the program with the provided pId already exists
    const existingProgram = await Program.findOne({ pId });
    if (existingProgram) {
        return NextResponse.json({ message: "Program with pId already exists" }, { status: 400 });
    }

    // Create the program
    const program = await Program.create({ name, owner, description, deptId: departmentExists.deptId, pId });
    return NextResponse.json({ message: "Program created", program }, { status: 201 });
}

export async function GET() {
    await connect();
    const programs = await Program.find();
    return NextResponse.json({ programs });
}
