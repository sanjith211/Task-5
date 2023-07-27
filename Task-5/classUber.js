class UberPriceCalculator {
    constructor(distance, serviceType) {
      this.distance = distance; 
      this.serviceType = serviceType; 
    }
  
    calculatePrice() {
      const baseFare = 2.5;
      const costPerKilometer = 1.5;
  
      let price = baseFare + this.distance * costPerKilometer;

      return price;
    }
  }
  
  const distanceInKilometers = 10;
  const serviceType = 'uberMini';
  const calculator = new UberPriceCalculator(distanceInKilometers, serviceType);
  const totalPrice = calculator.calculatePrice();
  
  console.log(`Uber price for ${distanceInKilometers} km with ${serviceType}: $${totalPrice}`);
  