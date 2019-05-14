
window.isEmpty = function (obj) {
    for (var key in obj) {
      return false;
    }
    return true;
  }
  let som={};
  console.log(isEmpty(som));

