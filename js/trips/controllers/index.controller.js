"use strict";

(function(){

  angular
    .module("trips")
    .controller("TripsIndexCtrl", ["TripFactory", TripsIndexCtrlFunc]);

  function TripsIndexCtrlFunc(TripFactory){
    var indexVm = this;
    indexVm.trips = TripFactoryFunc();
    indexVm.newTrip = {};

    indexVm.create = function(){
      indexVm.trips.push(indexVm.newTrip);
      indexVm.newTrip = {};
    }

  }
}())
