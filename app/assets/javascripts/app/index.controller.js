"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsIndexCtrl", [
      "$resource",
      "TripFactory",
      TripsIndexCtrlFunc
    ])

  function TripsIndexCtrlFunc(TripFactory){
    var indexVm = this;
    indexVm.trips = TripFactoryFunc();
    indexVm.newTrip = {};

    indexVm.create = function(){
      indexVm.trips.push(indexVm.newTrip);
      indexVm.newTrip = {};
    }
  }

})();
