import { Injectable } from '@nestjs/common';
import { Cellar } from './Cellar';

@Injectable()
export class CellarService {
  arrayCellars: Cellar[] = [];

  getHello(): string {
    return 'Welcome to the get cellar !';
  }
}
