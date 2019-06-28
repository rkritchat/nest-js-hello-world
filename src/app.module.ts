import { Module } from '@nestjs/common';

import { ProductModule } from './product/product.module';
import { UserModule } from './userinfo/userinfo.module';

@Module({
  imports: [ProductModule, UserModule],
})
export class AppModule {}
