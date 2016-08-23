"use strict";

(function(){
  var TripsShowCtrl = function($stateParams, $state, TripService) {
    var showVm = this;

    TripService.get({id: $stateParams.id}).then(function (trip) {
      showVm.trip = trip;
    })

    this.update = function() {
      TripService.update({
        id: $stateParams.id,
        update: showVm.trip
      })
    }

    this.delete = function() {
      TripService.delete({
        id: $stateParams.id
        }
      );
    }
  };

  TripsShowCtrl.$inject = ['$stateParams', '$state', 'TripService'];
  angular.module("sojourn").controller("TripsShowCtrl", TripsShowCtrl);
})();
