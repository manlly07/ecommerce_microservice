/*
  Warnings:

  - Added the required column `product_shop` to the `CartItem` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `CartItem` ADD COLUMN `product_shop` VARCHAR(191) NOT NULL,
    MODIFY `quantity` INTEGER NOT NULL DEFAULT 1;
