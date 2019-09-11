export interface Bottle {
  name: string;
  price: number;
}

export interface TotalPrice {
  toEuro: () => number;
  toDollar: () => number;
}

export class Cellar {
  bottles: Bottle[] = [];
  name: string = '';
  id: number;

  constructor(name: string, id:number) {
    this.name = name;
    this.id=id;
  }

  addBottle(name: string, price: number): void {
    const t: Bottle = { name, price };
    this.bottles.push(t);
  }

  getBottle(name: string): Bottle {
    let i: number = 0;
    let bottleFound: boolean = false;
    while (!bottleFound && i < this.bottles.length) {
      if (name === this.bottles[i].name) {
        bottleFound = true;
      } else {
        i++;
      }
    }
    if (bottleFound) {
      return this.bottles[i];
    } else {
      throw new Error('Bottle not found.');
    }
  }

  getTotalPrice(): TotalPrice {
    return {
      toEuro: () => {
        return this.computeTotalPrice();
      },
      toDollar: () => {
        return this.computeTotalPrice() * 0.8;
      },
    };
  }

  private computeTotalPrice(): number {
    let sum: number = 0;
    // tslint:disable-next-line:prefer-for-of
    for (let i: number = 0; i < this.bottles.length; i++) {
      sum += this.bottles[i].price;
    }
    return sum;
  }

}
