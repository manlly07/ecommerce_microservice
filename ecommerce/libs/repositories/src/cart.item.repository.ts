import { CartItem, Carts, Prisma } from "y/prisma/generated/cart";
import { MySQLBaseRepository } from "./mysql-base.repository";
import { PrismaService } from "y/prisma";
import { Injectable } from "@nestjs/common";


@Injectable()
export class CartItemRepository extends MySQLBaseRepository<CartItem, Prisma.CartItemFindUniqueArgs, Prisma.CartItemFindUniqueArgs> {
    constructor(prisma: PrismaService) {
        super(prisma.CartClient as any, prisma.CartClient.cartItem);
    }

    async findByKey(cart_id: string, product_id: string) {
        return await this.modelDelegate.findUnique({
            where: {
                product_id_cart_id: {
                    cart_id: cart_id,
                    product_id: product_id
                }
            },
        });
    }

    async updateItem(where: Prisma.CartItemWhereUniqueInput, data: Prisma.CartItemUpdateInput) {
        return await this.modelDelegate.update({
            where,
            data
        });
    }
}