"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("WelcomeCtrl", [
      "$state",
      "TripService",
      WelcomeCtrlFunc
    ])

  function WelcomeCtrlFunc($state, TripService){
    var indexVm = this;

    TripService.query().then(function (trips) {
      indexVm.trips = trips;
    });

    indexVm.newTrip = {};
    indexVm.newTrip.start = new Date();
    indexVm.newTrip.end = new Date();

    indexVm.create = function(){
      TripService.create(indexVm.newTrip).then(function (trip) {
        $state.go("tripShow", {id: trip.id});
      }).catch(function (err) {
        console.error('Error creating trip', err);
      });
    }
  }
})();
