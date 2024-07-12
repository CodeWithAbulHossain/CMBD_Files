



function quizTwo() {
    var x = 5;
    return function(y) {                              A. 5
      return x + y;                                   B. 10
    };                                                C. 15
  }                                                   D. ReferenceError
  
  var addFive = quizTwo();
  console.log(addFive(10));

  
 


