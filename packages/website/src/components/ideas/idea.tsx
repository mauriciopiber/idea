interface IdeaProps {
  idea: string;
}

export default function Idea(idea: IdeaProps) {
  return <p className="text-center p-2">{idea.idea}</p>;
}
