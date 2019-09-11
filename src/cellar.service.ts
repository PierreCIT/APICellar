import { Injectable } from '@nestjs/common';
import { Cellar, Bottle } from './Cellar';
import { stringify } from 'querystring';

interface cellarDTO { //Data Transfer Object
  name: string;
}

@Injectable()
export class CellarService {
  arrayCellars: Cellar[] = [new Cellar('Demo Cellar', '0')];
  uid: number = 1;

  getCellars(): Cellar[] {
    return this.arrayCellars;
  }

  createCellar(cellarDto: cellarDTO) {
    const cellar: Cellar = new Cellar(cellarDto.name, this.uid.toString());
    this.uid++;
    this.arrayCellars.push(cellar);
    let name: string = this.arrayCellars[this.arrayCellars.length - 1].name;
    let id: string = this.arrayCellars[this.arrayCellars.length - 1].id;
    return { name, id };
  }

  getCellarId(id: string): Cellar {
    let cellarFound: boolean = false;
    let i: number = 0;
    while (!cellarFound && i < this.arrayCellars.length) {
      if (id === this.arrayCellars[i].id) {
        cellarFound = true;
      } else {
        i++;
      }
    }
    if (cellarFound) {
      return this.arrayCellars[i];
    } else {
      throw new Error('Cellar not found.');
    }
  }

  addBottle(bottleDto: Bottle, id: string) {
    let currentCellar: Cellar = this.getCellarId(id);
    currentCellar.addBottle(bottleDto.name, bottleDto.price);
    return bottleDto;
  }

}
