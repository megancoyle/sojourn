(function(){

  angular
    .module("trips")
    .controller("TripsShowCtrl", TripsShowCtrlFunc)

    // console.log("hi mom");


  TripsShowCtrlFunc.$inject = ["$stateParams"]
  function TripsShowCtrlFunc($stateParams) {
    // var showVm = this;
    // showVm.trip = dummyData[$stateParams.id]
    //
    // showVm.update = function() {
    //   dummyData[$stateParams.id] = showVm.trip;
    // };
    //
    // showVm.delete = function() {
    //   dummyData.splice( $stateParams.id, 1 );
    // }
    // console.log("hi mom");

  }
}())
