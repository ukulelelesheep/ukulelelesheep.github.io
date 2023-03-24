var form = document.querySelector('form');

var abcToOneTwoThree = function(key) {
    var keyString = "";
    for (const char of key) {
        var num = char.charCodeAt(0) - 96;
        keyString += num;
    }
    return Number(keyString);
}

var shift = function(string, amount) {
    var newMessage = "";
    for (const char of string) {
        var newChar = char.charCodeAt(0) + amount;
        newChar = (newChar+63+950000)%95 + 32;
        newMessage += String.fromCodePoint(newChar);
    }
    return newMessage;
}

form.addEventListener('submit', event => {
    event.preventDefault();
    const message = document.getElementById("message").value;
    const key = document.getElementById("key").value;
    
    const radios = document.getElementsByName("encryptType");

    var amount = abcToOneTwoThree(key);
    if (radios[1].checked) {
        amount = -amount;
    }

    
    
    const result = shift(message, amount)

    var resultEl = document.getElementById("result");
    resultEl.innerHTML = result;

    
});

