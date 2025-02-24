document
  .getElementById("btn-login")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const number = document.getElementById("phone-number").value;
    const pin = document.getElementById("pin").value;
    if (number.length == 11 && number[0] === "0" && number[1] === "1") {
      if (pin == "1234") {
        window.location.href = "./main.html";
      } else {
        alert("Set Correct Pin!");
      }
    } else {
      alert("Number is invalid");
    }
  });
