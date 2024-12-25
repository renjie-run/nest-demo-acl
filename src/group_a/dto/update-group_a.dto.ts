import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupADto } from './create-group_a.dto';

export class UpdateGroupADto extends PartialType(CreateGroupADto) {}
