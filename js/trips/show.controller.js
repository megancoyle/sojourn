"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsShowCtrl", TripsShowCtrlFunc)

  TripsShowCtrlFunc.$inject = ["$stateParams"]
  function TripsShowCtrlFunc($stateParams) {
    var showVm = this;
    showVm.trip = dummyData[$stateParams.id]

    showVm.update = function() {
      dummyData[$stateParams.id] = showVm.trip;
    };

    showVm.delete = function() {
      dummyData.splice( $stateParams.id, 1 );
    }
  }

})();
