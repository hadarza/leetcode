function Blockscope() {
    var x = 2;
    let y = 3;
    
    if (true) {
      var x = 10;
      let y = 20;
      console.log(x); // Output: 10 (inner x)
      console.log(y); // Output: 20 (inner y)
    }
    
    console.log(x); // Output: 10 (outer x, inner x has overwritten it)
    console.log(y); // Output: 3 (outer y, inner y has different scope)
  }
  
  // var has function scope 
  // let doesnt have function scope


   // var doesnt have block scope
  //let has block scope = only accessible within the block in which it is defined
  function example2() {
    if (true) {
      let x = 2;
      var y = 3;
      console.log(x); // Output: 2 (accessible within the block)
      console.log(y); // Output: 3 (accessible within the function)
    }
    
    console.log(x); // Error: x is not defined (outside the block)
    console.log(y); // Output: 3 (accessible within the function)
  }
  
 

//global scope

module.exports ={Blockscope}