import { Cellar } from './Cellar';

describe('Cellar', () => {
  let cellar: Cellar;

  beforeEach(() => {
    cellar = new Cellar('Default name', '0');
  });

  it('should store a single bottle', () => {
    // Arrange
    const bottleName = 'Cheval Blanc';
    cellar.addBottle(bottleName, 42);
    // Act
    const chevalBlanc = cellar.getBottle(bottleName);
    // Assert
    expect(chevalBlanc).toEqual({
      name: bottleName,
      price: 42,
    });
  });

  it('should store 2 bottles and find the second one', () => {
    // Arrange
    const bottleName = 'Cheval Blanc';
    cellar.addBottle(bottleName, 42);
    const bottleName2 = 'Cheval Blanc2';
    cellar.addBottle(bottleName2, 42);
    // Act
    const chevalBlanc = cellar.getBottle(bottleName2);
    // Assert
    expect(chevalBlanc).toEqual({
      name: bottleName2,
      price: 42,
    });
  });

  it('should not find a bottle', () => {
    // Arrange
    const bottleName = 'Cheval Blanc';
    const bottleNameNotAdded = 'Cheval';
    cellar.addBottle(bottleName, 42);
    // Assert
    expect(() => cellar.getBottle(bottleNameNotAdded)).toThrow('Bottle not found.');
  });

  describe('getTotalPrice', () => {
    const bottleName: string = 'Cheval Blanc';
    const bottleName2: string = 'Cheval Blanc2';
    beforeEach(() => {
      cellar.addBottle(bottleName, 42);
      cellar.addBottle(bottleName2, 58);
    });
    it('should return price of 2 bottles in euro', () => {
      // Act
      const totalPriceEuro = cellar.getTotalPrice();
      // Assert
      expect(totalPriceEuro.toEuro()).toEqual(100);
    });
    it('should return price of 2 bottles in dollars', () => {
      // Act
      const totalPriceEuro = cellar.getTotalPrice();
      // Assert
      expect(totalPriceEuro.toDollar()).toEqual(80);
    });

  });

});
