"use strict";

(function(){
  var TripsShowCtrl = function($stateParams, $state, TripService, GpsService, $scope, $timeout) {
    var showVm = this;

    showVm.latitude = GpsService.getLatitude();
    showVm.longitude = GpsService.getLongitude();

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
  $scope.map = {center: {latitude: GpsService.getLatitude(), longitude: GpsService.getLongitude() }, zoom: 4 };
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
      // $timeout(function () {
      //   $scope.marker.coords = {
      //     latitude: 42.1451,
      //     longitude: -100.6680
      //   };
      //   $scope.dynamicMoveCtr++;
      //   $timeout(function () {
      //     $scope.marker.coords = {
      //       latitude: 43.1451,
      //       longitude: -102.6680
      //     };
      //     $scope.dynamicMoveCtr++;
      //   }, 2000);
      // }, 1000);

      showVm.trips.getDateRange = function(startDate, endDate){
        var dateArray = new Array();
        console.log(dateArray)
        var currentDate = startDate;
        function addDays(date, days){
          var dat = new Date(date.valueOf());
          dat.setDate(dat.getDate() + days);
          return dat;
        };
        while (currentDate <= endDate){
          dateArray.push(new Date(currentDate));
          console.log(dateArray);
          currentDate = addDays(currentDate, 1);
        }
        return dateArray;
      }
    };

    showVm.trips.getDateRange(showVm.trip.start, showVm.trip.end)

    TripsShowCtrl.$inject = ['$stateParams', '$state', 'TripService', 'GpsService', "$scope", "$timeout"];
    angular.module("sojourn").controller("TripsShowCtrl", TripsShowCtrl);
  })();
