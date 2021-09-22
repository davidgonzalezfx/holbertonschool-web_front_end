const globalVariable = "Welcome";

function outer() {
  alert(globalVariable);
  const course = "Holberton";
  function inner() {
    alert(`${globalVariable} ${course}`);
    function inception() {
      alert(`${globalVariable} ${course}${exclamation}`);
    }
    inception();
  }
  const exclamation = "!";

  inner();
}

outer();
