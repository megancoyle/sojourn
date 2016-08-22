(function(){

  angular
  .module("trips")
  .factory("TripFactory", TripFactoryFunc);

}())

function TripFactoryFunc(){
  return [
    // API query goes here, probably
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
  ];
}
