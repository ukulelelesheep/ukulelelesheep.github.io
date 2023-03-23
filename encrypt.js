var form = document.querySelector('form');
form.addEventListener('submit', event => {
    
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    const decrypt = document.getElementById("decrypt").value;
    
    shift = 1;
    if (decrypt === "on") {
        shift = -shift;
    }


    

    // Shift
    var newMessage = "";
    for (const char of message) {

        var newChar = char.charCodeAt(0) + shift;
        //newChar = (newChar+63+950000)%95 + 32;
        newMessage += String.fromCodePoint(newChar);
    }

    

    var resultEl = document.getElementById("result");
    resultEl.innerHTML = newMessage;

    event.preventDefault();
});

