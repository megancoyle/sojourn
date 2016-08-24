"use strict";

(function(){
  angular
  .module("sojourn", [
    "ui.router",
    "templates",
    "ngResource",
    "uiGmapgoogle-maps",
    "ngMaterial"
  ])
  .config([
    "$stateProvider",
    RouterFunc
  ])
  .config([
    "uiGmapGoogleMapApiProvider",
    GoogleMapApiProviderFunc
  ])

  function GoogleMapApiProviderFunc (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDNzHXnxO7i2lHvIufJw9jqta_MWpHyjTg',
      v: '3.24',
      libraries: 'places'
    });
  }

  function RouterFunc($stateProvider) {
    $stateProvider
    .state("indexShow", {
      url: "",
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
    .state("plansIndex", {
      url: "/plans",
      templateUrl: "plan-index.html",
      controller: "PlansIndexCtrl",
      controllerAs: "indexVm"
    })
    .state("planShow", {
      url: "/plans/:id",
      templateUrl: "plan-show.html",
      controller: "PlansShowCtrl",
      controllerAs: "showVm"
    })
  }

})();
