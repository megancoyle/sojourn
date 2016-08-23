"use strict";

(function(){
  angular
    .module("sojourn", [
      "ui.router",
      "templates",
      "ngResource",
      "ngMaterial"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])

    function RouterFunc($stateProvider) {
      $stateProvider
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
