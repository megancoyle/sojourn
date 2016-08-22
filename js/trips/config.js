function RouterFunc($stateProvider){

  $stateProvider
    .state("tripsIndex", {
      url: "/trips",
      templateUrl: "js/trips/index.html",
      controller: "TripsIndexCtrl",
      controllerAs: "indexVm"
    })
    .state("tripShow", {
      url: "trips/:id",
      templateUrl: "js/trips/show.html",
      controller: "TripsShowCtrl",
      controllerAs: "showVm"
    })
}
