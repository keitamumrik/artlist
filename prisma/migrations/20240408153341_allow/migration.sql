-- AlterTable
ALTER TABLE "artwork" ALTER COLUMN "title" DROP NOT NULL,
ALTER COLUMN "artist" DROP NOT NULL,
ALTER COLUMN "year" DROP NOT NULL,
ALTER COLUMN "image_url" DROP NOT NULL,
ALTER COLUMN "purchase_date" DROP NOT NULL,
ALTER COLUMN "owner" DROP NOT NULL;
