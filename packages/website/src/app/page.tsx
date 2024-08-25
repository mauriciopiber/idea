import Idea from '../components/ideas/idea';
import Navbar from '../components/layout/navbar/navbar';
import { getConcepts } from '../lib/concepts';

export default async function Home() {
  const concepts = await getConcepts();
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-4 md:p-20">
        <div className="flex flex-col gap-8">
          <h1 className="text-5xl text-center">Ideas</h1>
          <div className="flex flex-wrap">
            {concepts.map((concept) => {
              return <Idea key={concept.id} concept={concept} />;
            })}
          </div>
        </div>
      </div>
    </main>
  );
}
