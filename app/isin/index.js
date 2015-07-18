var isinModule = module.exports = angular.module('fundsApp.isin', []);

isinModule.directive('isinPropertiesTable', [
  function() {
    return {
      restrict: 'A',
      scope: {
        isin: '='
      },
      template: require('./isin_properties_table.html')
    }
  }]);

isinModule.directive('isinPropertiesList', [
  function() {
    return {
      restrict: 'A',
      scope: {
        isin: '='
      },
      template: require('./isin_properties_list.html')
    }
  }]);

isinModule.directive('isinChart', [
  function() {
    return {
      restrict: 'A',
      scope: {
        chart: '='
      },
      template: require('./isin_chart.html')
    }
  }]);
