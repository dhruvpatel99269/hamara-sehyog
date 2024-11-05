import { connect } from "@/dbConfig/dbConfig"; // Ensure this path is correct
import DataModel from "@/models/dataModel"; // Ensure this path is correct
import { NextResponse } from 'next/server';

export const GET = async () => {
    await connect(); // Connect to the database
    try {
        const data = await DataModel.findOne(); // Fetch the first document from the DataModel collection
        if (!data) {
            return NextResponse.json({ message: "No data found" }, { status: 404 }); // Handle case where no document exists
        }
        return NextResponse.json(data); // Send the fetched data back as JSON
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ message: "Error fetching data" }, { status: 500 });
    }
};

export const POST = async (req: Request) => {
    await connect(); // Connect to the database
    try {
        const { type, value } = await req.json(); // Extract type and value from request body

        if (!["home", "about", "stories", "contact", "work"].includes(type)) {
            return NextResponse.json({ message: "Invalid type provided" }, { status: 400 });
        }

        const updateData = await DataModel.findOneAndUpdate(
            {}, // Update the first document
            { [type]: value }, // Dynamically set the field to update
            { new: true, upsert: true } // Create a new document if none exists
        );

        return NextResponse.json(updateData); // Send the updated document back as JSON
    } catch (error) {
        console.error("Error updating data:", error);
        return NextResponse.json({ message: "Error updating data" }, { status: 500 });
    }
};
