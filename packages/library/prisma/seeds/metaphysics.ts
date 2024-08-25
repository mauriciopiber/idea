import { PrismaClient } from '@prisma/client';
import concepts from '../data/concepts.json';
import layers from '../data/layers.json';

const prisma = new PrismaClient();

async function main() {
  // Upsert layers first because they are referenced by concepts
  for (const layer of layers) {
    await prisma.layers.upsert({
      where: { name: layer.name },
      update: { name: layer.name },
      create: {
        name: layer.name,
        concepts: {
          create: layer.concepts.map((concept) => ({
            idea: concept.idea,
          })),
        },
      },
    });
  }

  // Upsert concepts
  for (const concept of concepts) {
    await prisma.concepts.upsert({
      where: { idea: concept.idea },
      update: {
        idea: concept.idea,
        layerId: concept.layerId,
      },
      create: {
        idea: concept.idea,
        layerId: concept.layerId,
      },
    });
  }
}

main()
  .catch((e) => {
    /* eslint-disable-next-line no-console */
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
