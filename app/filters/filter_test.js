describe('fuzzydate filter', function() {
  var fuzzydate;

  beforeEach(function () {
    module('fundsApp.filters');

    inject(function(_fuzzydateFilter_){
      fuzzydate = _fuzzydateFilter_;
    });
  });

  it('Should work with not-quite iso formatted dates', function () {
    var input = '2013-12-29 00:00:00.0';
    var format = 'MM/dd/yyyy';
    var expected = '12/29/2013';

    expect(fuzzydate(input, format)).toBe(expected);
  });
});
