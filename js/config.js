"use strict";

(function(){

  angular
  .module("trips")
  .config(["$stateProvider", RouterFunc]);

}());

function RouterFunc($stateProvider){

  $stateProvider
    .state("tripsIndex", {
      url: "/trips",
      templateUrl: "js/trips/templates/index.html",
      controller: "TripsIndexCtrl",
      controllerAs: "indexVm"
    })
    .state("tripShow", {
      url: "trips/:id",
      templateUrl: "js/trips/templates/show.html",
      controller: "TripsShowCtrl",
      controllerAs: "showVm"
    })
    .state("destIndex", {
      url: "trips/:id/destinations",
      templateUrl: "js/destinations/templates/index.html",
      controller: "DestIndexCtrl",
      controllerAs: "indexVm"
    })
}
