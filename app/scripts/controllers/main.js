'use strict';

/**
 * @ngdoc function
 * @name faMaterialApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the faMaterialApp
 */
angular.module('faMaterialApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
