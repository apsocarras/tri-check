// UI Logic 

// grab with document.querySelector() input values

// Business Logic

// Equilateral: all sides are equal.
// Isosceles: exactly 2 sides are equal.
// Scalene: no sides are equal.
// NOT a triangle: the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.

function tri_check(a,b,c){

  let result;

  if (!a || !b || !c) { 
    result = "error";
  } else if (a + b <= c || a + c <= b || b + c <= a) {
    result = "not-triangle";
  } else {
    if (a === b && a === c) { 
      result = "equilateral";
    } else if (a === b || a === c || b === c) {
      result = "isoceles";
    } else {     // a !== b && a !== c && b !== c
      result = "scalene"; 
    }
  }  
  return result;
}

window.addEventListener("load", function() {

  



});