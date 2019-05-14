
window.MakeObj = function  (){
var a = [
    {id: 1,
      name: 'Mihail'
     },
     {id: 2,
         name: 'Marina'
     },
     {id: 3,
         name: 'andrew'
     },
     {id: 4,
         name: 'Ilya'
     },
 ] 
 var b = a.reduce((acc, item, index) => {
    acc[index]=item.name;
    return acc;
}, {});
console.log(b)

}


