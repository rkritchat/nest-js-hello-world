import { Module } from '@nestjs/common';

import { CommonModule } from '../common/common.module';
import { ProductController } from './product.controller';
import { ProducService } from './product.service';

@Module({
  imports: [CommonModule],
  controllers: [ProductController],
  providers: [ProducService],
})
export class ProductModule {}
