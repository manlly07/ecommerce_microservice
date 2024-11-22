import { user_role } from "@prisma/client";
import { PrismaRepository } from "./prisma.repository";

export class UserRoleRepository extends PrismaRepository<user_role> {
    constructor() {
        super('user_role');
    }

    async findRoleByUserId(param: any) {
        return await ( this.getModel() as any).findFirst(param);
    }
}