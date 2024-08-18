import Idea from "../components/ideas/idea";
import { getIdeas } from "../lib/idea";

export default async function Home() {
  const ideas = (await getIdeas()) as { id: number; idea: string }[];
  return (
    <main className="min-h-screen">
      <div className="max-w-5xl mx-auto p-4 md:p-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl text-center">Ideas</h1>
          <div className="flex flex-wrap">
            {ideas.map((idea) => {
              return <Idea key={idea.id} idea={idea.idea} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
