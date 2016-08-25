"use strict";

(function(){
  angular
    .module("sojourn")
    .controller("PlansIndexCtrl", [
      "$state",
      "PlanService",
      PlansIndexCtrlFunc
    ])

  function PlansIndexCtrlFunc($state, PlanService){
    var indexVm = this;

    PlanService.query().then(function (plans) {
      indexVm.plans = plans;
    });
    // when creating plan, redirect to show page
    indexVm.create = function(){
      PlanService.create(indexVm.newPlan).then(function (plan) {
        $state.go("planShow", {id: plan.id});
      }).catch(function (err) {
        console.error('Error creating plan', err);
      });
    }
  }
})();
