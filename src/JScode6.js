

window.factorial = function (n) {
  return (n != 1) ? n * factorial(n - 1) : 1;
}


console.log( factorial(7) )



