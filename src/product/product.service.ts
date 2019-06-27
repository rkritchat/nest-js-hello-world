import { Injectable } from '@nestjs/common';

import { Product } from './product.model';

@Injectable()
export class ProducService {
  private products: Product[] = [];

  insertProduct(title: string, des: string, price: number) {
    const id = new Date().toString();
    const newProduct = new Product(new Date().toString(), title, des, price);
    this.products.push(newProduct);
    return id;
  }

  getAll() {
    //Need to use coppy because if not this list can be reach from outside.
    return [...this.products];
  }
}
