import Idea from '../../components/ideas/idea';
import { getLayers } from '../../lib/layers';

export default async function Page() {
  const layers = await getLayers();
  return (
    <div className="max-w-5xl mx-auto p-4 md:p-20">
      <div className="flex flex-col gap-8">
        <h1 className="text-5xl text-center">Camadas</h1>
        {layers.map(({ id, name, concepts }) => (
          <div key={id}>
            <h2 className="text-3xl text-center mb-4">{name}</h2>
            <div className="flex flex-wrap break-words">
              {concepts?.map((concept) => {
                return <Idea key={concept.id} concept={concept} />;
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
