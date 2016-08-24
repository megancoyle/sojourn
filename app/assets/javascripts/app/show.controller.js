"use strict";

(function(){
  var TripsShowCtrl = function($stateParams, $state, TripService, $scope, $timeout) {
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
  $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
  $scope.options = {scrollwheel: false};
  $scope.coordsUpdates = 0;
  $scope.dynamicMoveCtr = 0;

  $scope.searchbox = {
    template:'searchbox.tpl.html',
    events:{
      places_changed: function (searchBox) {
        console.log(searchBox.gm_accessors_.places.Od.searchBoxPlaces[0].geometry
          .viewport.j.H);
          console.log(searchBox.gm_accessors_.places.Od.searchBoxPlaces[0].geometry
            .viewport.H.H);
          }
        }
      }
      $scope.marker = {
        id: 0,
        coords: {
          latitude: 40.1451,
          longitude: -99.6680
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
      $timeout(function () {
        $scope.marker.coords = {
          latitude: 42.1451,
          longitude: -100.6680
        };
        $scope.dynamicMoveCtr++;
        $timeout(function () {
          $scope.marker.coords = {
            latitude: 43.1451,
            longitude: -102.6680
          };
          $scope.dynamicMoveCtr++;
        }, 2000);
      }, 1000);

    };



    TripsShowCtrl.$inject = ['$stateParams', '$state', 'TripService', "$scope", "$timeout"];
    angular.module("sojourn").controller("TripsShowCtrl", TripsShowCtrl);
  })();
