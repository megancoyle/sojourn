"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsIndexCtrl", [
      "$state",
      "TripService",
      TripsIndexCtrlFunc
    ])

  function TripsIndexCtrlFunc($state, TripService){
    var indexVm = this;

    TripService.query().then(function (trips) {
      indexVm.trips = trips;
    });

    indexVm.newTrip = {};

    indexVm.create = function(){
      TripService.create(indexVm.newTrip).then(function (trip) {
        $state.go("tripShow", {id: trip.id});
      }).catch(function (err) {
        console.error('Error creating trip', err);
      });
    }
  }
})();
