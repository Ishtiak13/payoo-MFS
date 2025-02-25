function handlePayClick() {
  const moneyAmount = document.getElementById("pay-amount").value;
  const money = parseInt(moneyAmount);
  const mainBalance = document
    .getElementById("main-balance")
    .innerText.slice(1);
  const balance = parseInt(mainBalance);
  const bankName = document.getElementById("merchant-select");
  const number = document.getElementById("pay-bill-number").value;
  const pin = document.getElementById("pay-pin").value;
  const originalFormHTML = document.getElementById("pay-bill-form").innerHTML;
  if (bankName.selectedIndex === 0) {
    alert("Select a Merchant");
  } else {
    if (number === "") {
      alert("Add the Biller Account Number!");
    } else if (number.length <= 12 && number.length >= 6) {
      if (moneyAmount === "") {
        alert("Add the amount!");
      } else if (pin == "1234") {
        if (money > 25000) {
          alert("You Cannot Add More than 25000!");
        } else {
          document.getElementById("main-balance").innerText =
            "$" + (balance - money);
          document.getElementById("pay-bill-form").innerHTML = `
            <section class="flex items-center justify-center flex-col gap-7">
            <div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your bill has been paid successfully!</span>
</div>
<button id="add-again-btn" class="btn btn-wide mx-auto">Pay again</button>
            </section>`;
          document
            .getElementById("add-again-btn")
            .addEventListener("click", function () {
              document.getElementById("pay-bill-form").innerHTML =
                originalFormHTML;
              document
                .getElementById("btn-pay-bill")
                .addEventListener("click", handlePayClick);
            });
        }
      } else {
        alert("Set Correct Pin!");
      }
    } else {
      alert("Biller Number is invalid!");
    }
  }
}
document
  .getElementById("btn-pay-bill")
  .addEventListener("click", handlePayClick);
