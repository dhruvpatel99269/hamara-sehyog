import { connect } from "@/dbConfig/dbConfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";

export async function POST(request: NextRequest) {
    try {
        // Establish a database connection within the function
        await connect();

        const reqBody = await request.json();
        const { username, email, password } = reqBody;
        console.log(reqBody);

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json({ error: "User already exists" }, { status: 400 });
        }

        // Hashing password
        const salt = await bcryptjs.genSalt(10);
        const hashedPassword = await bcryptjs.hash(password, salt);
        const newUser = new User({
            username,
            email,
            password: hashedPassword,
        });

        // Save new user to the database
        const savedUser = await newUser.save();
        console.log(savedUser);

        return NextResponse.json({
            message: "User created successfully",
            success: true,
            savedUser
        });
        
    } catch (error) {
        // Check if error is an instance of Error
        if (error instanceof Error) {
            console.error("Error in POST /api/sign-up:", error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }
        // Generic error message for unexpected error types
        console.error("Unexpected error in POST /api/sign-up:", error);
        return NextResponse.json({ error: "An unexpected error occurred" }, { status: 500 });
    }
}