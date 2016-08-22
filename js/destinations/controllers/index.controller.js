(function(){

angular
.module("destinations")
.controller("DestIndexCtrl", ["DestFactory", DestIndexCtrlFunction])

}())

function DestIndexCtrlFunction(DestFactory){
  var indexVm = this;

  indexVm.destinations = DestFactoryFunc();
}
