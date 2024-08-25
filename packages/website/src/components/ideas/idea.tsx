import { Concept } from '@ideas/library/src/types';

interface IdeaProps {
  concept: Concept;
}

export default function Idea({ concept }: IdeaProps) {
  return <p className="text-center p-2">{concept.idea}</p>;
}
