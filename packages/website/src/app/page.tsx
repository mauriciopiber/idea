import Idea from '../components/ideas/idea';
import { getConcepts } from '../lib/concepts';

export default async function Home() {
  const concepts = await getConcepts();
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl text-center">Ideas</h1>
        <div className="flex flex-wrap break-words">
          {concepts.map((concept) => {
            return <Idea key={concept.id} concept={concept} />;
          })}
        </div>
      </div>
    </div>
  );
}
