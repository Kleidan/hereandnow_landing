const myForm = document.getElementById('myForm');

myForm.addEventListener('submit', (e) => {
  e.preventDefault;

  const name = document.getElementById('fname');

  alert(` Thank you ${name.value} this is only a demo page`);
})