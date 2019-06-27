import { Module } from '@nestjs/common';

import { ProductController } from './product.controller';
import { ProducService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProducService],
})
export class ProductModule {}
