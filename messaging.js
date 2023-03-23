const form = document.querySelector('form');
form.addEventListener('submit', event => {
  let resultEl = document.getElementById("result");
  resultEl.innerHTML = "You did it!";
  event.preventDefault();
});

