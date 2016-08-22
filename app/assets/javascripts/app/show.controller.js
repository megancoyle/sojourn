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
    // this.trip = TripFactory.get({id: $stateParams.id});

    var showVm = this;
    showVm.trip = TripFactory.get({id: $stateParams.id});

    showVm.update = function() {
      TripFactory.get({id: $stateParams.id}) = showVm.trip;
    };

    showVm.delete = function() {
      TripFactory.splice( $stateParams.id, 1 );
    }
  }

})();
