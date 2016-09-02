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
  // config for google maps
  // nice job integrating google maps, but i'm not really sure how it integrates into the application
  function GoogleMapApiProviderFunc (uiGmapGoogleMapApiProvider) {
    uiGmapGoogleMapApiProvider.configure({
      key: 'AIzaSyDNzHXnxO7i2lHvIufJw9jqta_MWpHyjTg',
      v: '3.24',
      libraries: 'places'
    });
  }

  function RouterFunc($stateProvider) {
    $stateProvider
    // controller for homepage
    // i would either stick to all vm, or being more semantic with all controllerAs's.
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
    // controllers for planning section
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
