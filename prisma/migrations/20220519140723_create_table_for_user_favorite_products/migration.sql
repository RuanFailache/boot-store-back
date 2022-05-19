/*
  Warnings:

  - Added the required column `banner` to the `products` table without a default value. This is not possible if the table is not empty.
  - Added the required column `likes` to the `products` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "products" ADD COLUMN     "banner" TEXT NOT NULL,
ADD COLUMN     "images" TEXT[],
ADD COLUMN     "likes" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "userFavoriteProducts" (
    "id" SERIAL NOT NULL,
    "productId" INTEGER NOT NULL,
    "userId" INTEGER NOT NULL,

    CONSTRAINT "userFavoriteProducts_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "userFavoriteProducts_productId_key" ON "userFavoriteProducts"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "userFavoriteProducts_userId_key" ON "userFavoriteProducts"("userId");

-- AddForeignKey
ALTER TABLE "userFavoriteProducts" ADD CONSTRAINT "userFavoriteProducts_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "userFavoriteProducts" ADD CONSTRAINT "userFavoriteProducts_productId_fkey" FOREIGN KEY ("productId") REFERENCES "products"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
