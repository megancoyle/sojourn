"use strict";

(function(){
  var DetailService = function ($http) {
    this.query = function() {
      return $http.get('/api/trips' + trip.id + 'details/').then(function (res) {
        return res.data;
      });
    }

    this.get = function(params) {
      return $http.get('/api/trips/' + trip.id + 'details/').then(function (res) {
        return res.data;
      });
    }

    this.create = function(tripData) {
      return $http.post('/api/trips', detailData).then(function (res) {
        return res.data;
      });
    }

    this.update = function(params) {
      return $http.put('/api/trips/' + trip.id + '/details/'+ params.id, params.update);
    }

    this.delete = function(params) {
      return $http.delete('/api/trips/' + trip.id + '/details/' + params.id);
    }

  }

  DetailService.$inject = ['$http'];
  angular.module( "sojourn" ).service("DetailService", DetailService);
}());
