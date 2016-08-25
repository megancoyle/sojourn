(function(){

  function gpsServiceFunc($scope, $timeout, $state){
    var latitude;
    var longitude;

    this.setLatitude = function(searchBox){
      latitude = searchBox.gm_accessors_.places.Od.searchBoxPlaces[0].geometry.location.lat();
    }

    this.getLatitude = function(){
      return latitude;
    }

    this.setLongitude = function(searchBox){
      longitude = searchBox.gm_accessors_.places.Od.searchBoxPlaces[0].geometry.location.lng();
    }

    this.getLongitude = function(){
      return longitude;
    }

  }

  angular.module("sojourn")
  .service("GpsService", [gpsServiceFunc]);
  // GpsService.$inject = ['$scope', '$timeout', '$state' ];

}());
