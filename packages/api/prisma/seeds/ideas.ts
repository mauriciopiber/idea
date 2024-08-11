import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const ideas = [
  'Idea',
  'Celestial',
  'Retidão',
  'Integridade',
  'Dignidade',
  'Unidade',
  'Moderação',
  'Força',
  'KI',
  'Abundância',
  'Positivo',
  'Realização',
  'Intuição',
  'Cognição',
  'Atenção',
  'Responsabilidade',
  'Realidade',
  'Edificar',
  'Movimento',
  'Agilidade',
  'Terra',
  'Luz',
  'Efetividade',
  'Concentração',
  'Discernimento',
  'Diálogo',
  '1=1',
  'Pedagogia',
  'Justiça',
  'Resiliência',
  'Direção',
  'Trabalho',
  'Conciliação',
  'Switch',
  'Absoluto',
  'Sagrado',
  'Alegria',
  'Certeza',
  'Certo',
  'Verdade',
  'Espiritual',
  'Sincronia',
  'Vitalidade',
  'Ritmo',
  'Cores',
  'Alma',
  'Decisões',
  'Âmago',
  'Moral',
  'Lei',
  'Ânimo',
  'Essência',
  'Coração',
  'Mediato',
  'Estima',
  'Desejo',
  'Inconsciência',
  'Consciência',
  'Pensamento',
  'Clareza',
  'Iluminação',
  'Inspiração',
  'Ação',
  'Emoção',
  'Estado',
  'Momento',
  'Inclinação',
  'Sensação',
  'Agora',
  'Imediato',
  'Mundo',
  'Saúde',
  'Corpo',
  'Carisma',
  'Inteligência',
  'Dinheiro',
  'Oportunidades',
  'Amizade',
  'Alimentação',
  'Treino',
  'Trabalhar',
  'Programação',
  'Refletir',
];

async function main() {
  for (const idea of ideas) {
    await prisma.ideas.create({
      data: { idea },
    });
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
