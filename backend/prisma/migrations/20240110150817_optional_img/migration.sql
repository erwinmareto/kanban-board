-- AlterTable
ALTER TABLE "Task" ADD COLUMN     "image" TEXT;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "profileImg" DROP NOT NULL;
