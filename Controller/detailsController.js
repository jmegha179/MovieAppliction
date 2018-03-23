var info = angular.module('detail', []);
let index = 0;
info.controller('detailCtrl', function ($scope, $http, $location) {
    $http.get("./../music.json")
        .then(function (response) {
            $scope.name = response.data.Data;
            $scope.index = $location.absUrl().substring($location.absUrl().length - 1);

        });

});