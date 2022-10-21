// UI Logic 
function displayResults(triDescriptor) {
  if (triDescriptor === "not-triangle") {
    document.getElementById("not-triangle").removeAttribute("class");
  } else if (triDescriptor === "error" ) {
    document.getElementById("error").removeAttribute("class");
  } else {
    document.getElementById("is-triangle").removeAttribute("class");
    document.getElementById("triangle-type").innerText = triDescriptor;
  }
};

function reset() {
  // reset input values
  document.getElementById("side1Input").value = null;
  document.getElementById("side2Input").value = null;
  document.getElementById("side3Input").value = null;
  // hide each of the result/error messages
  document.getElementById("is-triangle").setAttribute("class", "hidden");
  document.getElementById("not-triangle").setAttribute("class", "hidden");
  document.getElementById("error").setAttribute("class", "hidden");
}

// Business Logic

function tri_check(){

  // grab with document.querySelector() input values
  const a = parseInt(document.getElementById("side1Input").value);
  const b = parseInt(document.getElementById("side2Input").value);
  const c = parseInt(document.getElementById("side3Input").value);

  // Initialize variable result
  let result;

  // If missing user input
  if (!a || !b || !c) { 
    result = "error";
  } 
  // NOT a triangle: the sum of the lengths of any two sides of a triangle is less than or equal to the length of the third side.
    else if (a + b <= c || a + c <= b || b + c <= a) {
    result = "not-triangle";
  } 
  // It's a triangle!!!!
  else {
    // Equilateral: all sides are equal.
    if (a === b && a === c) { 
      result = "equilateral";
    } 
    // Isosceles: exactly 2 sides are equal.
      else if (a === b || a === c || b === c) {
      result = "isoceles";
    } 
    // Scalene: no sides are equal.
      else {     // a !== b && a !== c && b !== c
      result = "scaleene"; 
    }
  }  
  return result;
}

// Wait for page to load, then run these functions
window.addEventListener("load", function() {

  // When user submits form, run these functions
  const form = document.querySelector("form");
  
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    // Retrieve input & check triangle identity
    const triType = tri_check();
    // Use value of result to alter DOM
    displayResults(triType);
    
    // Reset button functionality
    // unhide botton on submission of form
    document.getElementById("resetButton").removeAttribute("class");
    // define variable of the reset button
    const resetBtn = document.getElementById("resetButton");
    // Run reset function upon click of the reset button
    resetBtn.addEventListener("click", reset);
    });
  });