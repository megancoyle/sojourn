"use strict";

(function(){
  angular
    .module("sojourn", [
      "ui.router",
      "templates",
      "ngResource"
    ])
    .config([
      "$stateProvider",
      "$locationProvider",
      RouterFunc
    ])

    function RouterFunc($stateProvider, $locationProvider) {
      $locationProvider.html5Mode(true);
      $stateProvider
        .state("indexShow", {
          url: "/",
          templateUrl: "welcome.html",
          controller: "WelcomeCtrl",
          controllerAs: "indexVm"
        })
        .state("tripsIndex", {
          url: "/trips",
          templateUrl: "index.html",
          controller: "TripsIndexCtrl",
          controllerAs: "indexVm"
        })
        .state("tripShow", {
          url: "/trips/:id",
          templateUrl: "show.html",
          controller: "TripsShowCtrl",
          controllerAs: "showVm"
        })
    }

})();
