// The second argument/parameter is expected to be a function
function findWaldo(arr, found) {
        arr.forEach((element,i) => {
            if (element === "Waldo") {
                found(element,i);   // execute callback
              
            }
        });
     
  }
  
  function actionWhenFound(word,i) {
    console.log("foud word : "+ word + " at  index :",i);
  }
  
  findWaldo(["Alice", "Bob", "Waldo", "Winston"], actionWhenFound);