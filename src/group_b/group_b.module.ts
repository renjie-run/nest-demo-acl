import { Module } from '@nestjs/common';
import { GroupBController } from './group_b.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [GroupBController],
  providers: [],
})
export class GroupBModule {}
