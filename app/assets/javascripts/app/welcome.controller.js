"use strict";

(function(){
  angular
  .module("sojourn")
  .controller("WelcomeCtrl", [
    "$state",
    "TripService",
    "$scope",
    "$timeout",
    WelcomeCtrlFunc
  ])

  function WelcomeCtrlFunc($state, TripService, $scope, $timeout){
    var indexVm = this;
    this.getLocationName = function(){
      this.newTrip.location = this.newTrip.location
    }

    $scope.searchbox = {
      template:'searchbox.tpl.html',
      parentdiv:'searchBoxParent',
      events:{
        places_changed: function (searchBox) {
          console.log(searchBox)
          // $scope.ngShow = !$scope.ngShow
          console.log(searchBox.gm_accessors_.places.Od.formattedPrediction)
          $scope.location = searchBox.gm_accessors_.places.Od.formattedPrediction;
          console.log(searchBox.gm_accessors_.places.Od.searchBoxPlaces[0].geometry
            .viewport.j.H);
            console.log(searchBox.gm_accessors_.places.Od.searchBoxPlaces[0].geometry
              .viewport.H.H);
            }
          }
        }

    this.map = false
    var testVar;
    console.log(testVar);
    TripService.query().then(function (trips) {
      indexVm.trips = trips;
    });

    indexVm.create = function(){
      indexVm.newTrip = {};
      indexVm.newTrip.location = $scope.location;
      indexVm.newTrip.start = new Date();
      indexVm.newTrip.end = new Date();
      TripService.create(indexVm.newTrip).then(function (trip) {
        $state.go("tripShow", {id: trip.id});
      }).catch(function (err) {
        console.error('Error creating trip', err);
      });
    }

    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
    $scope.options = {scrollwheel: false};
    $scope.coordsUpdates = 0;
    $scope.dynamicMoveCtr = 0;


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
      }


    })();
