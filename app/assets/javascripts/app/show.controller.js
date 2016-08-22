"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsShowCtrl", [
      "$stateParams",
      "$state",
      "TripFactory",
      TripsShowCtrlFunc
    ]);

  function TripsShowCtrlFunc($stateParams, $state, TripFactory) {
    this.trip = TripFactory.get({id: $stateParams.id});
    this.update = function(){
    this.trip.$update({id: $stateParams.id})
    $state.go("tripsIndex");
    }
    this.destroy = function(){
    this.trip.$delete({id: $stateParams.id});
    }
  }

})();
