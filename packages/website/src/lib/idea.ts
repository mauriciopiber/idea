export async function getIdeas() {
  const res = await fetch(`${process.env.API_URL!}/ideas`, {
    cache: "no-store",
  });
  const ideas = await res.json();
  return ideas;
}
