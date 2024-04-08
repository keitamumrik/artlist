-- CreateTable
CREATE TABLE "artwork" (
    "id" SERIAL NOT NULL,
    "title" VARCHAR(255) NOT NULL,
    "artist" VARCHAR(255) NOT NULL,
    "year" INTEGER NULL,
    "description" TEXT NULL,
    "image_url" VARCHAR(255) NULL,
    "purchase_date" DATE NULL,
    "owner" VARCHAR(255) NULL,

    CONSTRAINT "artwork_pkey" PRIMARY KEY ("id")
);
