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
    // new trip date logic
    indexVm.newTrip = {};
    indexVm.newTrip.start = new Date();
    indexVm.newTrip.end = new Date();
    this.go = false;
    this.warning = true;
    $scope.searchbox = {
      template:'searchbox.tpl.html',
      parentdiv:'searchBoxParent',
      events:{
        places_changed: function (searchBox) {
          $scope.indexVm.go = true;
          $scope.indexVm.warning = false;
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




      }


    })();
