"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsIndexCtrl", [
      "$scope",
      "TripFactory",
      TripsIndexCtrlFunc
    ])

  function TripsIndexCtrlFunc($scope, TripFactory){
    // $scope.trips = TripFactoryFunc().query;
    this.trips = TripFactory.query();
    // console.log($scope.trips);

    // indexVm.create = function(){
    //   indexVm.trips.push(indexVm.newTrip);
    //   indexVm.newTrip = {};
    // }
  }

})();
