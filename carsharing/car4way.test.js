const {expect} = require('chai');
const {calculateTripPrice} = require('./car4way');

describe('CAR4WAY trip price calculator', () => {
  describe('calculateTripPrice', () => {
    it('should calculate price for trip of 28 min', () => {
      expect(calculateTripPrice(0, 28)).to.be.closeTo(221.2, 0.001);
    });

    it('should calculate price for trip of 2 h 1 min, 9 km', () => {
      expect(calculateTripPrice(9, 2 * 60 + 1)).to.be.closeTo(417.1, 0.001);
    });
    
    it('should calculate price for trip of 3h, 101 km', () => {
      expect(calculateTripPrice(101, 3 * 60)).to.be.closeTo(1110.9, 0.001);
    });
    
    it('should calculate price for trip of 1 day 3 h and 3 min, 500 km', () => {
      expect(calculateTripPrice(500, 27 * 60 + 3)).to.be.closeTo(4326, 0.001);
    });
    
    it('should calculate price for trip of 3 days 30 min, 699 km', () => {
      expect(calculateTripPrice(699, 72 * 60 + 30)).to.be.closeTo(6802.1, 0.001);
    });
    
    it('should calculate price for trip of 6 days 23 h, 1000 km', () => {
      expect(calculateTripPrice(1000, 167 * 60)).to.be.closeTo(11380, 0.001);
    });
  });
})
