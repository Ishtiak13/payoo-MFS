document.getElementById("cash-out").style.borderColor = "#0874F2";
document.getElementById("cash-out").style.background =
  "rgba(8, 116, 242, 0.05)";
document.querySelectorAll("#cash-out p").forEach((p) => {
  p.style.color = "black";
});

function handleCashOutClick() {
  const moneyAmount = document.getElementById("money-amount").value;
  const money = parseInt(moneyAmount);
  const mainBalance = document
    .getElementById("main-balance")
    .innerText.slice(1);
  const balance = parseInt(mainBalance);

  const number = document.getElementById("phone-number").value;
  const pin = document.getElementById("pin").value;
  const originalFormHTML = document.getElementById("add-money-form").innerHTML;
  if (number === "") {
    alert("Add the Number!");
  } else if (number.length == 11 && number[0] === "0" && number[1] === "1") {
    if (moneyAmount === "") {
      alert("Add the amount!");
    } else if (pin == "1234") {
      if (money > 25000) {
        alert("You Cannot Withdraw More than 25000!");
      } else {
        document.getElementById("main-balance").innerText =
          "$" + (balance - money);
        document.getElementById("add-money-form").innerHTML = `
            <section class="flex items-center justify-center flex-col gap-7">
            <div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your money withdraw Successfully!</span>
</div>


<button id="add-again-btn" class="btn btn-wide mx-auto">Add again</button>
            </section>`;
        document
          .getElementById("add-again-btn")
          .addEventListener("click", function () {
            document.getElementById("add-money-form").innerHTML =
              originalFormHTML;
            document
              .getElementById("btn-withdraw-money")
              .addEventListener("click", handleCashOutClick);
          });
      }
    } else {
      alert("Set Correct Pin!");
    }
  } else {
    alert("Number is invalid");
  }
}
document
  .getElementById("btn-withdraw-money")
  .addEventListener("click", handleCashOutClick);

document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});
document.getElementById("add-money").addEventListener("click", function () {
  window.location.href = "./add.html";
});
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    window.location.href = "./transfer.html";
  });
document.getElementById("pay-bill").addEventListener("click", function () {
  window.location.href = "./pay.html";
});
document
  .getElementById("transaction-money")
  .addEventListener("click", function () {
    window.location.href = "./transaction.html";
  });
document.getElementById("bonus-coupon").addEventListener("click", function () {
  window.location.href = "./bonus.html";
});
