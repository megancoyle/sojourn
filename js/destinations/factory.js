(function(){

  angular
  .module("destinations")
  .factory("DestFactory", DestFactoryFunc)

}())

function DestFactoryFunc(){
  return ["Des Moines", "Lansing", "Cincinnati"]
}
