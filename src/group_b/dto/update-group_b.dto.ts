import { PartialType } from '@nestjs/mapped-types';
import { CreateGroupBDto } from './create-group_b.dto';

export class UpdateGroupBDto extends PartialType(CreateGroupBDto) {}
