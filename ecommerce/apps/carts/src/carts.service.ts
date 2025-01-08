import { Injectable } from '@nestjs/common';

@Injectable()
export class CartsService {
  getHello(): string {
    return 'Hello World!';
  }
}
