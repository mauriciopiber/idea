export interface Layer {
  name: string;
  concepts?: Concept[];
}

export interface Concept {
  id: number;
  idea: string;
  layer?: Layer | null;
}
