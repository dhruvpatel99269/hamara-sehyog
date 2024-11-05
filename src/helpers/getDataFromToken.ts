import { NextRequest } from "next/server";
import jwt, { JwtPayload } from "jsonwebtoken";

export const getDataFromToken = (request: NextRequest): string | undefined => {
    try {
        const token = request.cookies.get("token")?.value || "";
        const decodedToken = jwt.verify(token, process.env.TOKEN_SECRET!) as JwtPayload;
        return decodedToken.id as string | undefined;
    } catch (error) {
        if (error instanceof Error) {
            throw new Error(error.message);
        }
        throw new Error("An unknown error occurred during token verification");
    }
};
