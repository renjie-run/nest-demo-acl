import {
  Controller,
  Get,
  Post,
  Delete,
  UseGuards,
  SetMetadata,
  Put,
} from '@nestjs/common';
import { PermissionGuard } from 'src/user/permission.guard';
import { LoginGuard } from 'src/user/login-guard';

@Controller('group-a')
export class GroupAController {
  @Post()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'add_1')
  create() {
    return 'success create with permission: add_1';
  }

  @Get()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'query_1')
  findAll() {
    return 'success findAll with permission: query_1';
  }

  @Put()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'update_1')
  update() {
    return 'success update with permission: update_1';
  }

  @Delete()
  @UseGuards(LoginGuard, PermissionGuard)
  @SetMetadata('permission', 'delete_1')
  remove() {
    return 'success delete with permission: delete_1';
  }
}
