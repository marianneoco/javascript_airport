describe("Airport", function() {
  var airport;
  var plane;
  var weather;

  beforeEach(function() {
    weather = jasmine.createSpyObj('weather', ['isStormy']);
    airport = new Airport(weather);
    plane = jasmine.createSpy();
  });

  describe('basic behaviour -', function(){

    it('should store planes but start empty', function(){
      expect(airport.planes).toEqual([]);
    });

    it('should have a capacity', function(){
      expect(airport.capacity).toBe(3);
    });

  });

  describe('landing -', function(){

    it('can land a plane', function() {
      weather.isStormy.and.returnValue(false);
      airport.land(plane)
      expect(airport.planes).toContain(plane);
    });

    it("can't land the same plane twice", function(){
      weather.isStormy.and.returnValue(false);
      airport.land(plane)
      expect(function(){
        airport.land(plane);
      }).toThrowError("Plane already in airport");
    });

    it("can't land another plane if the airport is full", function(){
      weather.isStormy.and.returnValue(false);
      plane2 = jasmine.createSpy();
      plane3 = jasmine.createSpy();
      plane4 = jasmine.createSpy();
      airport.land(plane)
      airport.land(plane2)
      airport.land(plane3)
      expect(function(){
        airport.land(plane4);
      }).toThrowError("Airport is full")
    });

    it("can't land a plane if the weather is stormy", function(){
      weather.isStormy.and.returnValue(true);
      expect(function(){
        airport.land(plane);
      }).toThrowError("Can't land - stormy weather")
    });

  });

  describe('taking off -', function(){

    it('a plane can take off', function(){
      airport.land(plane)
      airport.takeOff(plane)
      expect(airport.planes).toEqual([])
    });

    it("a plane can't take off if it isn't in the airport", function(){
      expect(function(){
        airport.takeOff(plane)
      }).toThrowError("Plane not in airport")
    });

  });

});
