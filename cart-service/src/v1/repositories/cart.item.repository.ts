import { CartItem } from "@prisma/client";
import { PrismaRepository } from "./prisma.repository";

export class CartItemRepository extends PrismaRepository<CartItem> {
    constructor() {
        super('CartItem');
    }

    async findByKey(cart_id: string, product_id: string) {
        return await (this.getModel() as any).findUnique({
            where: {
                cart_id: cart_id,
                product_id: product_id
            },
        });
    }
}