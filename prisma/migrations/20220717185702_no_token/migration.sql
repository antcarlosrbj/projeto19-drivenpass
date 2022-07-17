/*
  Warnings:

  - You are about to drop the `tokens` table. If the table is not empty, all the data it contains will be lost.
  - Changed the type of `category` on the `registers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "tp_category" AS ENUM ('credential', 'secure_note', 'wifi', 'cards');

-- DropForeignKey
ALTER TABLE "tokens" DROP CONSTRAINT "tokens_userId_fkey";

-- AlterTable
ALTER TABLE "registers" DROP COLUMN "category",
ADD COLUMN     "category" "tp_category" NOT NULL;

-- DropTable
DROP TABLE "tokens";
