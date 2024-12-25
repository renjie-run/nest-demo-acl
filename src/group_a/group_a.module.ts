import { Module } from '@nestjs/common';
import { GroupAService } from './group_a.service';
import { GroupAController } from './group_a.controller';
import { UserModule } from 'src/user/user.module';

@Module({
  imports: [UserModule],
  controllers: [GroupAController],
  providers: [GroupAService],
})
export class GroupAModule {}
