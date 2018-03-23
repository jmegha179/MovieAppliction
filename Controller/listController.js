'use strict'
var a = angular.module('movieList', []);
a.controller('movieCtrl', function ($scope, $http) {
  $http.get("../music.json")
    .then(function (response) {
      $scope.names = response.data.Data;
      // $scope.dd=response.data.images;
      // alert($scope.dd)

    });
  // Delete
  $scope.removeItem = function (x) {
    $scope.errortext = "";
    $scope.names.splice(x, 1);
  }
  // Update
  $scope.edit = function (x, y) {
    $scope.m = y;
    $scope.editingList = true;
    $scope.edit = x;
  }
  $scope.save = function () {
    $scope.edit = {};
    $scope.editingList = false;
  }
  //Insert
  $scope.insert = function (x) {
    $scope.insert = true;
    $scope.errortext = "";
    if (!$scope.addMe) {
      return;
    }
    if ($scope.names.indexOf($scope.addMe) == -1) {
      $scope.names.push($scope.addMe);
    } else {
      $scope.errortext = "The item is already in your shopping list.";
    }
  }
  $scope.Details = function (x) {
    window.location = '../View/MovieDetail.html?var=' + x
  }

});