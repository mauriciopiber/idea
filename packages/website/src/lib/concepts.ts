import type { Concept } from '@ideas/library/src/types';

export async function getConcepts() {
  const res = await fetch(`${process.env.API_URL!}/concepts`, {
    cache: 'no-store',
  });
  const concepts = await res.json();
  return concepts as Concept[];
}
