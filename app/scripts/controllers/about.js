'use strict';

/**
 * @ngdoc function
 * @name faMaterialApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the faMaterialApp
 */
angular.module('faMaterialApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
