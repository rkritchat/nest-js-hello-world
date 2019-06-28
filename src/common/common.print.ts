import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonPrint {
  print() {
    console.log('work.....');
  }
}
