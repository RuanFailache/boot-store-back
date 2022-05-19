/*
  Warnings:

  - You are about to drop the column `cartId` on the `productsOnCart` table. All the data in the column will be lost.
  - You are about to drop the `carts` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[userId]` on the table `productsOnCart` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userId` to the `productsOnCart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "carts" DROP CONSTRAINT "carts_userId_fkey";

-- DropForeignKey
ALTER TABLE "productsOnCart" DROP CONSTRAINT "productsOnCart_cartId_fkey";

-- DropIndex
DROP INDEX "productsOnCart_cartId_key";

-- AlterTable
ALTER TABLE "productsOnCart" DROP COLUMN "cartId",
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "carts";

-- CreateIndex
CREATE UNIQUE INDEX "productsOnCart_userId_key" ON "productsOnCart"("userId");

-- AddForeignKey
ALTER TABLE "productsOnCart" ADD CONSTRAINT "productsOnCart_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
