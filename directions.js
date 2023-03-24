const form = document.querySelector('form');
form.addEventListener('submit', event => {
  var location = document.getElementById("start").value;
  
  if (location === "(-1650, 3316)" || location === "(-1650,3316)") {
    var equation = "-5x + (1/2)y = 10000";
  } else if (location === "Your Location") {
    var equation = "11x + 10y = -10000";
  } else {
    var equation = "Sorry, I don't actually know how to get there... big oof!";
  }


  let resultEl = document.getElementById("result");
  resultEl.innerHTML = equation;

  let msgEl = document.getElementById("msg");
  msgEl.innerHTML = "Have a nice trip!";
  event.preventDefault();
});

