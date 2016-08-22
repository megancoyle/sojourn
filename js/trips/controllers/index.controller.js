"use strict";

(function(){

  angular
    .module("trips")
    .controller("TripsIndexCtrl", TripsIndexCtrlFunc);

    // console.log("hi mom");

  function TripsIndexCtrlFunc(){
    var indexVm = this;
    indexVm.trips = [
      {
        author: "Ben",
        body: "this is Ben's awesometacular trip",
        photo_url: "#"
      },
      {
        author: "Megan",
        body: "this is Megan's supercool trip",
        photo_url: "#"
      }
    ];;
    indexVm.newTrip = {};

    indexVm.create = function(){
      dummyData.push(indexVm.newTrip);
      indexVm.newTrip = {};
    }
    // console.log("hi mom");

  }
}())
