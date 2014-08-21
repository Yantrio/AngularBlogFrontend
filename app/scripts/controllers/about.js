'use strict';

/**
 * @ngdoc function
 * @name blogFrontendApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the blogFrontendApp
 */
angular.module('blogFrontendApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
