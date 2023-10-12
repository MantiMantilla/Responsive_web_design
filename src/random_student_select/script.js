function select_random() {
  // get the dropdown element
  const select = document.getElementById("students");

  // fetch all options within the dropdown
  const options = select.children;

  console.log(options);

  // generate a random number between 0 and the total amount of options
  // the number will always be an index within the bounds of the array (options)
  const random = Math.floor(Math.random() * options.length);

  // set the value of the dropdown to a random option
  select.value = options[random].value;
}
