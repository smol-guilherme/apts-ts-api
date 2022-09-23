/*
  Warnings:

  - Added the required column `profilePicture` to the `users` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userName` to the `users` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "users" ADD COLUMN     "profilePicture" TEXT NOT NULL,
ADD COLUMN     "userName" TEXT NOT NULL;
