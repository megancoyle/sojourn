"use strict";

(function(){
  angular
    .module( "sojourn" )
    .factory( "TripFactory", [
      "$resource",
      TripFactoryFunc
    ]);

    function TripFactoryFunc( $resource ){
      return $resource( "http://localhost:3000/api/trips" );
    }
}());
