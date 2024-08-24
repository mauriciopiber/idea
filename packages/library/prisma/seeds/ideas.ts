import { PrismaClient } from '@prisma/client';
import { readFileSync } from 'fs';
import path from 'path';

const prisma = new PrismaClient();

const ideasFile = readFileSync(
  path.resolve(`${__dirname}/../data/ideas.json`),
  'utf8',
);
const ideas = JSON.parse(ideasFile);

async function main() {
  for (const idea of ideas) {
    await prisma.ideas.upsert({
      where: { idea: idea },
      update: { idea: idea },
      create: { idea },
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
