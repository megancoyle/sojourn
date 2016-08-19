"use strict";

(function(){
  angular
    .module("sojourn", [
      "ui.router"
    ])
    .config([
      "$stateProvider",
      RouterFunc
    ])

    function RouterFunc($stateProvider) {
      $stateProvider
        .state("tripsIndex", {
          url: "/trips",
          templateUrl: "js/trips/index.html",
          controller: "TripsIndexCtrl",
          controllerAs: "indexVm"
        })
        .state("entryShow", {
          url: "entryies/:id",
          templateUrl: "js/trips/show.html",
          controller: "TripsShowCtrl",
          controllerAs: "showVm"
        })
    }

})();
