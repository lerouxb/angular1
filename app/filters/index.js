var filtersModule = module.exports = angular.module('fundsApp.filters', []);

filtersModule.filter('fuzzydate', ['dateFilter', function(dateFilter) {
  return function(input, format, timezone) {
    var transformed = new Date(input.replace(' ', 'T')+'Z');
    var dateString = dateFilter(transformed, format, timezone);
    return dateString;
  };
}]);
