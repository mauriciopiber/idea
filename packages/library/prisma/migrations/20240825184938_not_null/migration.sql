/*
  Warnings:

  - Made the column `idea` on table `concepts` required. This step will fail if there are existing NULL values in that column.
  - Made the column `name` on table `layers` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "concepts" ALTER COLUMN "idea" SET NOT NULL;

-- AlterTable
ALTER TABLE "layers" ALTER COLUMN "name" SET NOT NULL;
