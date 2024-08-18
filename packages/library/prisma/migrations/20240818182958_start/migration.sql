-- CreateTable
CREATE TABLE "ideas" (
    "id" SERIAL NOT NULL,
    "created_at" TIMESTAMPTZ(6) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "idea" VARCHAR,

    CONSTRAINT "ideas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "slices" (
    "id" SERIAL NOT NULL,
    "name" VARCHAR,
    "parent_id" INTEGER,

    CONSTRAINT "slices_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "ideas_idea_key" ON "ideas"("idea");

-- CreateIndex
CREATE UNIQUE INDEX "slices_name_key" ON "slices"("name");

-- AddForeignKey
ALTER TABLE "slices" ADD CONSTRAINT "slices_parent_id_fkey" FOREIGN KEY ("parent_id") REFERENCES "slices"("id") ON DELETE SET NULL ON UPDATE CASCADE;
