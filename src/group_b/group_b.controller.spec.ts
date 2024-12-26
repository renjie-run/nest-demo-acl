import { Test, TestingModule } from '@nestjs/testing';
import { GroupBController } from './group_b.controller';
import { GroupBService } from './group_b.service';

describe('GroupBController', () => {
  let controller: GroupBController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupBController],
      providers: [GroupBService],
    }).compile();

    controller = module.get<GroupBController>(GroupBController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
