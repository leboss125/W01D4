
var array = [10, 2, 5, 1, 9];
let value = array.sort((a,b) => {return  a-b});

console.log(value)

var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];
  
  
  let sortItems = function(arr){
    let obj = arr.sort(compare);
    return obj
  }
  console.log(sortItems(students))
  
  
  function compare(a, b) {
    if (a.name < b.name) {
      return -1;
    }
    if (a.name > b.name) {
      return 1;
    }
    return  b.age - a.age ;
  }