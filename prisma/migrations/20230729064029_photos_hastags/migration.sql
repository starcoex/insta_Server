/*
  Warnings:

  - Made the column `file` on table `Photo` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Photo" ALTER COLUMN "file" SET NOT NULL;
