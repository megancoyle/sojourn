"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("TripsIndexCtrl", TripsIndexCtrlFunc)

  function TripsIndexCtrlFunc() {
    var indexVm = this;
    indexVm.entries = dummyData;
    indexVm.newTrip = {};

    indexVm.create = function() {
      dummyData.push(indexVm.newTrip);
      indexVm.newTrip = {};
    }
  }

})();
