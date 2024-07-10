function getCircleLength(radius) {
    if (radius === undefined) {
      throw new Error('Radius is required');
    }
    return 2 * Math.PI * radius;
  }
  
  function getCircleArea(radius) {
    if (radius === undefined) {
      throw new Error('Radius is required');
    }
    return Math.PI * radius ** 2;
  }
  
  module.exports = { getCircleLength, getCircleArea };
  