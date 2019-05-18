window.MakeObj = function  (){
var userName = [
    {id: 27,
      name: 'Mihail'
     },
     {id: 15,
         name: 'Marina'
     },
     {id: 3,
         name: 'andrew'
     },
     {id: 4,
         name: 'Ilya'
     },
 ] 
 var NevUser = userName.reduce((acc, item, index) => {
     index=userName[index].id
    acc[index]=item.name;
    return acc;
}, {});
console.log(NevUser)

}
