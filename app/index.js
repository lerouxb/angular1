module.exports = angular.module('fundsApp', [
  require('./filters/index').name,
  require('./fund/index').name,
  require('./isin/index').name
]);
