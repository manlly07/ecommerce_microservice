import { users } from "@prisma/client";
import { PrismaRepository } from "./prisma.repository";

export class UserRepository extends PrismaRepository<users> {
    constructor() {
        super('users');
    }

    async findByEmail(params: {
        user_email: string;
        where?: any;
    }) {
        const { user_email, where = {} } = params;
        return await ( this.getModel() as any ).findUnique({
            where: {
                user_email: user_email,
                ...where
            },
        });
    }
}