"use strict";

(function(){
  var TripsShowCtrl = function($stateParams, $state, TripService, GpsService, $scope, $timeout) {
    var showVm = this;
    // retrieve lat longs for map
    showVm.latitude = GpsService.getLatitude();
    showVm.longitude = GpsService.getLongitude();
    // CRUD for trips
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
  // map setup
  $scope.map = {center: {latitude: GpsService.getLatitude(), longitude: GpsService.getLongitude() }, zoom: 4 };
  $scope.options = {scrollwheel: false};
  $scope.coordsUpdates = 0;
  $scope.dynamicMoveCtr = 0;

      $scope.marker = {
        id: 0,
        coords: {
          latitude: GpsService.getLatitude(),
          longitude: GpsService.getLongitude()
        },
        options: { draggable: true },
        events: {
          dragend: function (marker, eventName, args) {
            $log.log('marker dragend');
            var lat = marker.getPosition().lat();
            var lon = marker.getPosition().lng();
            $log.log(lat);
            $log.log(lon);

            $scope.marker.options = {
              draggable: true,
              labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
              labelAnchor: "100 0",
              labelClass: "marker-labels"
            };
          }
        }
      };
      $scope.$watchCollection("marker.coords", function (newVal, oldVal) {
        if (_.isEqual(newVal, oldVal))
        return;
        $scope.coordsUpdates++;
      });
    };

    TripsShowCtrl.$inject = ['$stateParams', '$state', 'TripService', 'GpsService', "$scope", "$timeout"];
    angular.module("sojourn").controller("TripsShowCtrl", TripsShowCtrl);
  })();
