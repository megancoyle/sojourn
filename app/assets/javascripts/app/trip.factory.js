"use strict";

(function(){
  angular
    .module( "sojourn" )
    .factory( "TripFactory", [
      "$resource",
      TripFactoryFunc
    ]);

    function TripFactoryFunc($resource){
      return $resource("/api/trips/:id", {}, {
      update: {method: "PUT"}
    });
  }
}());
