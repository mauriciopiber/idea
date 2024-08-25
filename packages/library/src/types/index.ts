export interface Layer {
  id: number;
  name: string;
  concepts?: Concept[];
}

export interface Concept {
  id: number;
  idea: string;
  layer?: Layer | null;
}
