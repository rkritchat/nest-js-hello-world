import { Module } from '@nestjs/common';

import { CommonPrint } from './common.print';
import { CommonService } from './common.service';

@Module({
  providers: [CommonPrint, CommonService],
  exports: [CommonPrint, CommonService],
})
export class CommonModule {}
