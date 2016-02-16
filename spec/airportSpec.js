describe("Airport", function() {

  beforeEach(function() {
    airport = new Airport();
    plane = new Airplane();
  });

  // describe ('airport', function() {
    it('can receive a plane', function() {
      airport.land(plane);
      expect(airport.planes).toContain(plane);
    });
  // });
});
