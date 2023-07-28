import jwt from "jsonwebtoken";
import prisma from "../script";
// export interface CustomRequest extends Request {
//   token: string | JwtPayload;
// }
export const getUserFromReq = async (token) => {
    try {
        if (!token) {
            return null;
        }
        //@ts-ignore
        const { id } = jwt.verify(token, process.env.PRIVATE_KEY);
        const user = await prisma.user.findUnique({
            where: { id: id },
        });
        if (user) {
            return user;
        }
        else {
            return null;
        }
    }
    catch (error) {
        return null;
    }
};
