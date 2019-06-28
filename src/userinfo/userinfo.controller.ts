import { Controller, Get, Param } from '@nestjs/common';

import { UserInfoService } from './userinfo.service';

@Controller('user')
export class UserInfoController {
  constructor(private readonly userinfoService: UserInfoService) {}

  @Get(':id')
  findUserInfoById(@Param('id') id: string) {
    return this.userinfoService.getUserInfoById(id);
  }
}
