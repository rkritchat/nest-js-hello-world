import { Injectable } from '@nestjs/common';

import { CommonPrint } from '../common/common.print';
import { CommonService } from '../common/common.service';
import { UserInfo } from './userinfo.model';

@Injectable()
export class UserInfoService {
  constructor(
    private readonly coomon: CommonPrint,
    private readonly cm: CommonService,
  ) {}
  private userInfo: UserInfo[] = [
    new UserInfo('1', 'Kritchat', 'Rojanaphruk', 24),
    new UserInfo('2', 'John', 'Doe', 42),
    new UserInfo('3', 'Jane', 'Doe', 19),
  ];

  getUserInfoById(id: string) {
    this.coomon.print();
    this.cm.printWord(['1', '2', 'test']);
    return this.userInfo.find(e => e.id === id);
  }
}
