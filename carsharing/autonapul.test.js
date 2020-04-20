const {expect} = require('chai');
const {calculateTripPrice} = require('./autonapul');

describe('Autonapůl trip price calculator', () => {
  describe('calculateTripPrice', () => {
    it('should calculate price for trip of 59 min, 199 km', () => {
      expect(calculateTripPrice(199, 59)).to.be.closeTo(1014.1, 0.001);
    });

    it('should calculate price for trip of 59 min, 201 km', () => {
      expect(calculateTripPrice(201, 59)).to.be.closeTo(1022.9, 0.001);
    });
    
    it('should calculate price for trip of 1 h 1 min, 199 km', () => {
      expect(calculateTripPrice(199, 61)).to.be.closeTo(1053.1, 0.001);
    });

    it('should calculate price for trip of 1 h 1 min, 201 km', () => {
      expect(calculateTripPrice(201, 61)).to.be.closeTo(1061.9, 0.001);
    });

    it('should calculate price for trip of 1 day 3 min, 55 km', () => {
      expect(calculateTripPrice(55, 24 * 60 + 3)).to.be.closeTo(696.5, 0.001);
    });

    it('should calculate price for trip of 2 days 5 h, 350 km', () => {
      expect(calculateTripPrice(350, 53 * 60)).to.be.closeTo(2510, 0.001);
    });

    it('should calculate price for trip of 3 days, 900 km', () => {
      expect(calculateTripPrice(900, 72 * 60)).to.be.closeTo(4840, 0.001);
    });

    it('should calculate price for trip of 3 days 1 min, 150 km', () => {
      expect(calculateTripPrice(150, 72 * 60 + 1)).to.be.closeTo(1897, 0.001);
    });

    it('should calculate price for trip of 3 days 17 h, 333 km', () => {
      expect(calculateTripPrice(333, 89 * 60)).to.be.closeTo(2948.7, 0.001);
    });
  });
})
