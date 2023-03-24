const form = document.querySelector('form');
form.addEventListener('submit', event => {
  event.preventDefault();

  const messageEl = document.getElementById("message");
  const addressEl = document.getElementById("address");


  const resultEl = document.getElementById("result");
  resultEl.innerHTML = "Message \'" 
      + messageEl.value + "\' was sent to address " 
      + addressEl.value;

});

