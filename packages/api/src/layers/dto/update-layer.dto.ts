import { PartialType } from '@nestjs/mapped-types';
import { CreateIdeaDto } from './create-layer.dto';

export class UpdateIdeaDto extends PartialType(CreateIdeaDto) {}
