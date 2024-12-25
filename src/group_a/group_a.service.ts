import { Injectable } from '@nestjs/common';
import { CreateGroupADto } from './dto/create-group_a.dto';
import { UpdateGroupADto } from './dto/update-group_a.dto';

@Injectable()
export class GroupAService {
  create(createGroupADto: CreateGroupADto) {
    return 'This action adds a new groupA';
  }

  findAll() {
    return `This action returns all groupA`;
  }

  findOne(id: number) {
    return `This action returns a #${id} groupA`;
  }

  update(id: number, updateGroupADto: UpdateGroupADto) {
    return `This action updates a #${id} groupA`;
  }

  remove(id: number) {
    return `This action removes a #${id} groupA`;
  }
}
