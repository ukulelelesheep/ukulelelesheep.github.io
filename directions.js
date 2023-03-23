const form = document.querySelector('form');
form.addEventListener('submit', event => {
  var location = document.getElementById("start").value;
  
  if (location === "(-1650, 3316)") {
    var equation = "-5x + (1/2)y = 10000";
  } else {
    var equation = "11x + 10y = -10000";
  }


  let resultEl = document.getElementById("result");
  resultEl.innerHTML = equation;

  let msgEl = document.getElementById("msg");
  msgEl.innerHTML = "Have a nice trip!";
  event.preventDefault();
});

