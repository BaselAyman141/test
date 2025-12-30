let attempts = 0;

function checkPassword() {
  const password = document.getElementById("password").value;
  const msg = document.getElementById("error-msg");

  if (password === "218") {
    window.location.href = "message.html";
  } else {
    attempts++;

    if (attempts === 1) {
      msg.innerText = "جري تاني ي بطتي 🦆❤️";
    } else {
      msg.innerText = "زركزي ي بنوتي 😘💗";
    }
  }
}
