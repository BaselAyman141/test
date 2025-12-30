let attempts = 0;

function checkPassword() {
  const password = document.getElementById("password").value;
  const msg = document.getElementById("error-msg");

  if(password === "218") {
    window.location.href = "message.html";
  } else {
    attempts++;
    if(navigator.vibrate) navigator.vibrate(200);
    msg.innerText = attempts === 1
      ? "جري تاني ي بطتي 🦆❤️"
      : "زركزي ي بنوتي 😘💗";
  }
}
