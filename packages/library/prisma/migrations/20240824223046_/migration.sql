/*
  Warnings:

  - You are about to drop the `ideas` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `slices` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "slices" DROP CONSTRAINT "slices_parent_id_fkey";

-- DropTable
DROP TABLE "ideas";

-- DropTable
DROP TABLE "slices";

-- CreateTable
CREATE TABLE "Concept" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idea" VARCHAR(255),
    "layerId" INTEGER,

    CONSTRAINT "Concept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Layer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "Layer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Concept_idea_key" ON "Concept"("idea");

-- CreateIndex
CREATE UNIQUE INDEX "Layer_name_key" ON "Layer"("name");

-- AddForeignKey
ALTER TABLE "Concept" ADD CONSTRAINT "Concept_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "Layer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
