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

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const request: Request = context.switchToHttp().getRequest();
    const login_user: TokenUser = (request as any).user;
    if (!login_user) {
      throw new UnauthorizedException('has no permission');
    }
    const found_user = await this.userService.findById(login_user.id);
    if (!found_user) {
      throw new UnauthorizedException('has no permission');
    }

    const permission = this.reflector.get<string>(
      'permission',
      context.getHandler(),
    );
    if (found_user.permissions.some((p) => p.name === permission)) {
      return true;
    }
    throw new UnauthorizedException('has no permission');
  }
}
