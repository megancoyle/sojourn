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
    var indexVm = this;
    indexVm.trips = TripFactory.query();
    indexVm.newTrip = {};

    indexVm.create = function(){
      indexVm.trips.push(indexVm.newTrip);
      indexVm.newTrip = {};
      }
  }
})();
