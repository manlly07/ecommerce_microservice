-- AlterTable
ALTER TABLE `CartItem` ADD PRIMARY KEY (`product_id`, `cart_id`);

-- DropIndex
DROP INDEX `CartItem_product_id_cart_id_key` ON `CartItem`;
