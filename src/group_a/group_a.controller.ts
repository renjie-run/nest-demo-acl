import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  SetMetadata,
  Inject,
} from '@nestjs/common';
import { GroupAService } from './group_a.service';
import { CreateGroupADto } from './dto/create-group_a.dto';
import { UpdateGroupADto } from './dto/update-group_a.dto';
import { PermissionGuard } from 'src/user/permission.guard';
import { LoginGuard } from 'src/user/login-guard';

@Controller('group-a')
export class GroupAController {
  constructor(private readonly groupAService: GroupAService) {}

  @Post()
  create(@Body() createGroupADto: CreateGroupADto) {
    return this.groupAService.create(createGroupADto);
  }

  @Get()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'query_1')
  findAll() {
    return this.groupAService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.groupAService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGroupADto: UpdateGroupADto) {
    return this.groupAService.update(+id, updateGroupADto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.groupAService.remove(+id);
  }
}
