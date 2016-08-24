"use strict";

(function(){
  var PlansShowCtrl = function($stateParams, $state, PlanService, $scope) {
    var showVm = this;

    PlanService.get({id: $stateParams.id}).then(function (plan) {
      showVm.plan = plan;
    })

    this.update = function() {
      PlanService.update({
        id: $stateParams.id,
        update: showVm.plan
      })
    }

    this.delete = function() {
      PlanService.delete({
        id: $stateParams.id
      }
    );
  }
    };



    PlansShowCtrl.$inject = ['$stateParams', '$state', 'PlanService'];
    angular.module("sojourn").controller("PlansShowCtrl", PlansShowCtrl);
  })();
