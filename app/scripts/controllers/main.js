'use strict';

/**
 * @ngdoc function
 * @name blogFrontendApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the blogFrontendApp
 */
angular.module('blogFrontendApp')
  .controller('MainCtrl', function ($scope, $http) {


    $http.post("http://localhost:1949/Posts/0/10").success(function (data) {
      $scope.posts = data;
    });
  });
