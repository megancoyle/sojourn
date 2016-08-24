"use strict";

(function(){
  angular
  .module("sojourn")
  .controller("WelcomeCtrl", [
    "$state",
    "TripService",
    "GpsService",
    "$scope",
    "$timeout",
    WelcomeCtrlFunc
  ])

  function WelcomeCtrlFunc($state, TripService, GpsService, $scope, $timeout){
    var indexVm = this;

    indexVm.newTrip = {};
    indexVm.newTrip.start = new Date();
    indexVm.newTrip.end = new Date();

    $scope.searchbox = {
      template:'searchbox.tpl.html',
      parentdiv:'searchBoxParent',
      events:{
        places_changed: function (searchBox) {
          $scope.location = searchBox.gm_accessors_.places.Od.formattedPrediction;
          indexVm.newTrip.location = $scope.location;
          GpsService.setLatitude(searchBox);
          GpsService.setLongitude(searchBox);
          console.log(GpsService.getLatitude());
          console.log(GpsService.getLongitude());
            }
          }
        }

        this.map = false
        var testVar;
        // console.log(testVar);
        TripService.query().then(function (trips) {
          indexVm.trips = trips;
        });

        indexVm.create = function(){


          TripService.create(indexVm.newTrip).then(function (trip) {
            console.log($scope.location);
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
