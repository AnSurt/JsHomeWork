window.showEmpty = function(){
let isEmpty = function (obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
console.log(isEmpty());
}