import { Injectable } from '@nestjs/common';
import { Cellar } from './Cellar';

@Injectable()
export class CellarService {
  arrayCellars: Cellar[] = [];
  uid :number=0;
  getCellars(): Cellar[] {
    return this.arrayCellars;
  }

  createCellar(name) {
    const cellar: Cellar = new Cellar(name, this.uid);
    this.uid++;
    this.arrayCellars.push(cellar);
  }

}
