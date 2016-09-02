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
  // i would stick with either vm or $scope and not use both, and lean on the side of the prior
  // in this way you keep all properties/variables scoped to a particular instance of the controller
  // map setup
  $scope.map = {center: {latitude: GpsService.getLatitude(), longitude: GpsService.getLongitude() }, zoom: 12 };

  $scope.options = {scrollwheel: false};
  $scope.coordsUpdates = 0;
  $scope.dynamicMoveCtr = 0;

  var styleArray = [
    {
      "featureType": "administrative",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#444444"
        }
      ]
    },
    {
      "featureType": "landscape",
      "elementType": "all",
      "stylers": [
        {
          "color": "#f2f2f2"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "all",
      "stylers": [
        {
          "saturation": -100
        },
        {
          "lightness": 45
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "simplified"
        }
      ]
    },
    {
      "featureType": "road.arterial",
      "elementType": "labels.icon",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "all",
      "stylers": [
        {
          "visibility": "off"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "all",
      "stylers": [
        {
          "color": "#6996bf"
        },
        {
          "visibility": "on"
        }
      ]
    }
  ];
  $scope.options = {
    styles: styleArray
  };

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

// i usually like to organize my angular in this way: setter method, injections, callback. But there's not a real rule for it. Checkout John Papa's style guidez
