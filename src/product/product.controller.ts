import { Body, Controller, Get, Post } from '@nestjs/common';

import { Product } from './product.model';
import { ProducService } from './product.service';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProducService) {}

  @Post()
  addProduct(@Body() req: Product) {
    return this.productService.insertProduct(
      req.title,
      req.description,
      req.price,
    );
  }

  @Get()
  getAllProduct() {
    return this.productService.getAll();
  }
}
