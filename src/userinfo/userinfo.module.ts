import { Module } from '@nestjs/common';

import { CommonModule } from '../common/common.module';
import { UserInfoController } from './userinfo.controller';
import { UserInfoService } from './userinfo.service';

@Module({
  imports: [CommonModule],
  controllers: [UserInfoController],
  providers: [UserInfoService],
})
export class UserModule {}
