// Import necessary dependencies
import { NextApiRequest, NextApiResponse } from 'next';
import connect from '@/utils/db';
import { Organization, Department } from '@/models/schema';
import { NextResponse } from "next/server"; 

export async function POST(req) {
    const { name, deptId, vision, mission, organizationName, head } = await req.json();
    await connect();

    try {
        // Find the corresponding organization ObjectId based on the organizationName
        const organization = await Organization.findOne({ name: organizationName });
        if (!organization) {
            return NextResponse.json({ message: "Organization not found" }, { status: 404 });
        }

        // Check if the department with the provided deptId already exists
        const existingDepartment = await Department.findOne({ deptId });
        if (existingDepartment) {
            return NextResponse.json({ message: "Department with deptId already exists" }, { status: 400 });
        }

        // Create the department using the organization ObjectId
        await Department.create({ name, deptId, vision, mission, organization: organization._id, head });
        return NextResponse.json({ message: "Department created" }, { status: 201 });
    } catch (error) {
        console.error("Error creating department:", error);
        return NextResponse.json({ message: "Failed to create department" }, { status: 500 });
    }
}

export async function GET(){
    await connect();
    const departments = await Department.find().populate('organization', 'name');
    return NextResponse.json({ departments });
}
