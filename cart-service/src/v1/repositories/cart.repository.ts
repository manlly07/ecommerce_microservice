import { Carts } from "@prisma/client";
import { PrismaRepository } from "./prisma.repository";

export class CartsRepository extends PrismaRepository<Carts> {
    constructor() {
        super('Carts');
    }

    async findByUserId(userId: string) {
        return await this.getModel().findUnique({
            where: {
                user_id: userId
            },
            include: {
                cart_items: true
            }
        });
    }
}