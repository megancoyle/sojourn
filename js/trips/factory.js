(function(){

  angular
  .module("trips")
  .factory("TripFactory", TripFactoryFunc);

}())

function TripFactoryFunc(){
  return [
    // API query goes here, probably
    {
      destination: "Columbus",
      start: "November 5th, 2002",
      end: "November 12th, 2002"
    },
    {
      destination: "Boise",
      start: "May 4th, 2008",
      end: "May 20th, 2008"
    }
  ];
}
