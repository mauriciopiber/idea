import type { Layer } from '@ideas/library/src/types';

export async function getLayers() {
  const res = await fetch(`${process.env.API_URL!}/layers`, {
    cache: 'no-store',
  });
  const layers = await res.json();
  return layers as Layer[];
}
