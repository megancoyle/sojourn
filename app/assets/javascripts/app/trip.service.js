"use strict";

(function(){
  var TripService = function ($http) {
    // logic for API found at /api/trips
    this.query = function() {
      return $http.get('/api/trips').then(function (res) {
        return res.data;
      });
    }

    this.get = function(params) {
      return $http.get('/api/trips/' + params.id).then(function (res) {
        return res.data;
      });
    }

    this.create = function(tripData) {
      return $http.post('/api/trips', tripData).then(function (res) {
        return res.data;
      });
    }

    this.update = function(params) {
      return $http.put('/api/trips/' + params.id, params.update);
    }

    this.delete = function(params) {
      return $http.delete('/api/trips/' + params.id);
    }

  }

  TripService.$inject = ['$http'];
  angular.module( "sojourn" ).service("TripService", TripService);
}());
