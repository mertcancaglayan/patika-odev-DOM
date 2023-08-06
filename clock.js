let nameInput = prompt("Please enter your name");

if (nameInput != null) {
    document.querySelector("#myName").innerText = nameInput
}

function showTime() {
    let time = new Date();
    let now = time.toLocaleTimeString('tr-TR', {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      });
    let day = time.toLocaleDateString('tr-TR', {weekday: 'long'})
    document.querySelector("#myClock").innerText = now + " " + day
}

setInterval(showTime,1000)