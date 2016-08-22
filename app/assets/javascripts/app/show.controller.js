"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsShowCtrl", [
      "TripFactory",
      TripsShowCtrlFunc
    ]);

  TripsShowCtrlFunc.$inject = ["$stateParams"]
  function TripsShowCtrlFunc($stateParams, TripFactory) {
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
