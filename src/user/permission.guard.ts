import {
  CanActivate,
  ExecutionContext,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { UserService } from './user.service';
import { Request } from 'express';
import { Reflector } from '@nestjs/core';
import { RedisService } from 'src/redis/redis.service';

interface TokenUser {
  id: number;
  username: string;
}

@Injectable()
export class PermissionGuard implements CanActivate {
  @Inject(UserService)
  private userService: UserService;

  @Inject(Reflector)
  private reflector: Reflector;

  @Inject(RedisService)
  private redis: RedisService;

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const login_user: TokenUser = (request as any).user;
    if (!login_user) {
      throw new UnauthorizedException('has no permission');
    }

    const permissionsKey = `user_${login_user.id}_permissions`;
    let permissions = await this.redis.getList(permissionsKey);
    if (permissions.length === 0) {
      const found_user = await this.userService.findById(login_user.id);
      if (!found_user) {
        throw new UnauthorizedException('has no permission');
      }
      permissions = found_user.permissions.map((permission) => permission.name);
      this.redis.setList(permissionsKey, permissions, 60 * 30);
    }

    const permission = this.reflector.get<string>(
      'permission',
      context.getHandler(),
    );
    if (permissions.some((p) => p === permission)) {
      return true;
    }
    throw new UnauthorizedException('has no permission');
  }
}
