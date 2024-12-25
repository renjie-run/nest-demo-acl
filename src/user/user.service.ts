import { Injectable } from '@nestjs/common';
import { InjectEntityManager } from '@nestjs/typeorm';
import { EntityManager } from 'typeorm';
import { Permission } from './entities/permission.entity';
import { User } from './entities/user.entity';

@Injectable()
export class UserService {
  @InjectEntityManager()
  private entityManager: EntityManager;

  async initData() {
    const existUsers = await this.entityManager.find(User);
    if (existUsers.length > 0) {
      return 'data already exists';
    }

    const permission1_add = new Permission();
    permission1_add.name = 'add_1';

    const permission1_update = new Permission();
    permission1_update.name = 'update_1';

    const permission1_delete = new Permission();
    permission1_delete.name = 'delete_1';

    const permission1_query = new Permission();
    permission1_query.name = 'query_1';

    const permission2_add = new Permission();
    permission2_add.name = 'add_2';

    const permission2_update = new Permission();
    permission2_update.name = 'update_2';

    const permission2_delete = new Permission();
    permission2_delete.name = 'delete_2';

    const permission2_query = new Permission();
    permission2_query.name = 'query_2';

    const user1 = new User();
    user1.username = 'user1';
    user1.password = '123456';
    user1.permissions = [
      permission1_add,
      permission1_update,
      permission1_delete,
      permission1_query,
    ];

    const user2 = new User();
    user2.username = 'user2';
    user2.password = '123456';
    user2.permissions = [
      permission2_add,
      permission2_update,
      permission2_delete,
      permission2_query,
    ];

    await this.entityManager.save([
      permission1_add,
      permission1_update,
      permission1_delete,
      permission1_query,
      permission2_add,
      permission2_update,
      permission2_delete,
      permission2_query,
    ]);

    await this.entityManager.save([user1, user2]);

    return 'init data success';
  }

  async findById(id: number) {
    const user = await this.entityManager.findOne(User, {
      where: { id },
      relations: {
        permissions: true,
      },
    });
    return user;
  }
}
