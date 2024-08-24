import { CreateConceptDto } from './create-concept.dto';

export interface UpdateConceptDto extends CreateConceptDto {
  id: string;
}
