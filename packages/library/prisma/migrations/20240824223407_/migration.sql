/*
  Warnings:

  - You are about to drop the `concept` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `layer` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "concept" DROP CONSTRAINT "concept_layerId_fkey";

-- DropTable
DROP TABLE "concept";

-- DropTable
DROP TABLE "layer";

-- CreateTable
CREATE TABLE "concepts" (
    "id" SERIAL NOT NULL,
    "createdAt" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idea" VARCHAR(255),
    "layerId" INTEGER,

    CONSTRAINT "concepts_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "layers" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR(255),

    CONSTRAINT "layers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "concepts_idea_key" ON "concepts"("idea");

-- CreateIndex
CREATE UNIQUE INDEX "layers_name_key" ON "layers"("name");

-- AddForeignKey
ALTER TABLE "concepts" ADD CONSTRAINT "concepts_layerId_fkey" FOREIGN KEY ("layerId") REFERENCES "layers"("id") ON DELETE SET NULL ON UPDATE CASCADE;
