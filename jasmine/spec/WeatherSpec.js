describe("Weather", function() {
  var weather;

  beforeEach(function() {
    weather = new Weather();
  });

    it('should sometimes be stormy', function(){
      spyOn(Math, 'random').and.returnValue(0.1);
      expect(weather.isStormy()).toBeTrue();
    });

    it('should not always be stormy', function(){
      spyOn(Math, 'random').and.returnValue(0.6);
      expect(weather.isStormy()).toBeFalse();
    });
});
