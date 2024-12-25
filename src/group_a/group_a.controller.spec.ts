import { Test, TestingModule } from '@nestjs/testing';
import { GroupAController } from './group_a.controller';
import { GroupAService } from './group_a.service';

describe('GroupAController', () => {
  let controller: GroupAController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [GroupAController],
      providers: [GroupAService],
    }).compile();

    controller = module.get<GroupAController>(GroupAController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
