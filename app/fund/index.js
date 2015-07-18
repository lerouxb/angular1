var _ = require('underscore');

var fundModule = module.exports = angular.module('fundsApp.fund', ['ngResource']);

FOUR_YEARS = 1000*60*60*24*365*4; // in milliseconds

fundModule.factory('Fund', ['$resource',
  function($resource) {
    return $resource('/data/funds.json', {}, {
      query: {method: 'GET'}
    });
  }]);

fundModule.controller('FundListCtrl', ['$scope', 'Fund',
  function($scope, Fund) {
    // I didn't assign the future returned by query to $scope, but pulled it
    // out in a callback. Is that going to be a problem?
    Fund.query(function(data) {
      $scope.funds = data.funds;
    });
    $scope.orderProp = 'name';
  }]);

/*
fundModule.directive('FundsList', [
  function() {
  }]);
*/

// TODO: move to separate module..
fundModule.filter('fuzzydate', ['dateFilter', function(dateFilter) {
  return function(input, format, timezone) {
    var transformed = new Date(input.replace(' ', 'T')+'Z');
    var dateString = dateFilter(transformed, format, timezone);
    return dateString;
  };
}]);

fundModule.directive('fundInfo', [
  function() {
    return {
      restrict: 'A',
      scope: {
        fund: '='
      },
      controller: function($scope) {
        // this still feels like it should be a method on a fund object, but
        // maybe not in angular, I guess?
        $scope.fundIsOld = function() {
          var launchDate = new Date($scope.selectedISIN['Launch Date']);
          return new Date() - launchDate > FOUR_YEARS;
        };

        $scope.$watch('selectedCode', function(selectedCode) {
          selectedISIN = _.find($scope.fund.shareClasses, function(isin) {
            return (isin['ISIN Code'] == selectedCode);
          });
          if (selectedISIN) {
            $scope.selectedISIN = selectedISIN;
          } else {
            // TODO: error? Not technically possible as you can only select
            // what's there..
          }
        });

        firstISIN = $scope.fund.shareClasses[0];
        $scope.selectedCode = firstISIN['ISIN Code']
      },
      template: require('./fund_info.html')
    }
  }]);

/*
fundModule.directive('fundPropertiesTable', [
  function() {
    return {
      restrict: 'A',
      require: '^fundInfo'
      scope: {
        fund: '='
      }
    }
  }]);

fundModule.directive('isinDropdown', [
  function() {
    return {
      restrict: 'A',
      require: '^fundInfo'
      scope: {
        isins: '='
      }
    }
  }]);
*/
