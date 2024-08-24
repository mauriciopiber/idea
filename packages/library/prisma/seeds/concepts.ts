import { PrismaClient } from '@prisma/client';
import { ConceptsService } from '../../src/concepts/concepts.service';
import concepts from './../data/concepts.json';

const prisma = new PrismaClient();

const conceptsService = new ConceptsService(prisma);

async function main() {
  for (const concept of concepts) {
    await conceptsService.upsert({ idea: concept });
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
