import { CreateLayerDto } from './create-layer.dto';

export interface UpdateLayerDto extends CreateLayerDto {
  id: string;
}
