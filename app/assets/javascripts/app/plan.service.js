"use strict";

(function(){
  var PlanService = function ($http) {
    this.query = function() {
      return $http.get('/api/plans').then(function (res) {
        return res.data;
      });
    }

    this.get = function(params) {
      return $http.get('/api/plans/' + params.id).then(function (res) {
        return res.data;
      });
    }

    this.create = function(tripData) {
      return $http.post('/api/plans', tripData).then(function (res) {
        return res.data;
      });
    }

    this.update = function(params) {
      return $http.put('/api/plans/' + params.id, params.update);
    }

    this.delete = function(params) {
      return $http.delete('/api/plans/' + params.id);
    }

  }

  PlanService.$inject = ['$http'];
  angular.module( "sojourn" ).service("PlanService", PlanService);
}());
