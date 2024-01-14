/*
  Warnings:

  - You are about to drop the column `image` on the `Task` table. All the data in the column will be lost.
  - You are about to drop the column `profileImg` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Task" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "User" DROP COLUMN "profileImg";
