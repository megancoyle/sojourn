"use strict";

(function(){
  angular
<<<<<<< HEAD:app.js
  .module("trips", ["ui.router"])
=======
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
>>>>>>> ec42342662d74352ad5bdaad8d7ec7b18137790d:js/app.js

})();
