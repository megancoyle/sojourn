"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsIndexCtrl", [
      "TripService",
      TripsIndexCtrlFunc
    ])

  function TripsIndexCtrlFunc(TripService){
    var indexVm = this;

    TripService.query().then(function (trips) {
      indexVm.trips = trips;
    });

    indexVm.newTrip = {};
    indexVm.newTrip.start = new Date();
    indexVm.newTrip.end = new Date();

    // console.log(indexVm.newTrip)

    indexVm.create = function(){
      TripService.create(indexVm.newTrip).then(function (trip) {
        console.log('Successfully created trip', trip);
      }).catch(function (err) {
        console.error('Error creating trip', err);
      });
    }
  }
})();
