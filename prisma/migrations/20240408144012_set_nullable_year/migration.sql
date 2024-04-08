/*
  Warnings:

  - Made the column `year` on table `artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image_url` on table `artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `purchase_date` on table `artwork` required. This step will fail if there are existing NULL values in that column.
  - Made the column `owner` on table `artwork` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "artwork" ALTER COLUMN "year" SET NOT NULL,
ALTER COLUMN "image_url" SET NOT NULL,
ALTER COLUMN "purchase_date" SET NOT NULL,
ALTER COLUMN "owner" SET NOT NULL;
