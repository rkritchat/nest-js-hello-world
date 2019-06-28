import { Injectable } from '@nestjs/common';

@Injectable()
export class CommonService {
  printWord(text: string[]) {
    text.forEach(e => console.log(`Data os ${e}`));
  }
}
