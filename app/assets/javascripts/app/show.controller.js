"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsShowCtrl", [
      "$stateParams",
      "TripFactory",
      TripsShowCtrlFunc
    ]);

  function TripsShowCtrlFunc($stateParams, TripFactory) {
    this.trip = TripFactory.get({id: $stateParams.id});
    this.update = function(){
    this.trip.$update({id: $stateParams.id})
    }
    this.destroy = function(){
    this.trip.$delete({id: $stateParams.id});
    }
  }

})();
