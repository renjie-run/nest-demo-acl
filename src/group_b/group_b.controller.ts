import {
  Controller,
  Get,
  Post,
  Delete,
  UseGuards,
  SetMetadata,
  Put,
} from '@nestjs/common';
import { LoginGuard } from 'src/user/login-guard';
import { PermissionGuard } from 'src/user/permission.guard';

@Controller('group-b')
export class GroupBController {
  @Post()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'add_2')
  create() {
    return 'success create with permission: add_2';
  }

  @Get()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'query_2')
  findAll() {
    return 'success findAll with permission: query_2';
  }

  @Put()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'update_2')
  update() {
    return 'success update with permission: update_2';
  }

  @Delete()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'delete_2')
  remove() {
    return 'success delete with permission: delete_2';
  }
}
