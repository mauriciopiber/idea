/*
  Warnings:

  - You are about to drop the `Concept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Layer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Concept" DROP CONSTRAINT "Concept_layerId_fkey";

-- DropTable
DROP TABLE "Concept";

-- DropTable
DROP TABLE "Layer";

-- CreateTable
CREATE TABLE "concept" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idea" VARCHAR(255),
    "layerId" INTEGER,

    CONSTRAINT "concept_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layer" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "layer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "concept_idea_key" ON "concept"("idea");

-- CreateIndex
CREATE UNIQUE INDEX "layer_name_key" ON "layer"("name");

-- AddForeignKey
ALTER TABLE "concept" ADD CONSTRAINT "concept_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "layer"("id") ON DELETE SET NULL ON UPDATE CASCADE;
