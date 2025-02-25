function handleTransferClick() {
  const moneyAmount = document.getElementById("transfer-money-amount").value;
  const money = parseInt(moneyAmount);
  const mainBalance = document
    .getElementById("main-balance")
    .innerText.slice(1);
  const balance = parseInt(mainBalance);

  const number = document.getElementById("transfer-phone-number").value;
  const pin = document.getElementById("transfer-pin").value;
  const originalFormHTML = document.getElementById("transfer-form").innerHTML;
  if (number === "") {
    alert("Add the Number!");
  } else if (number.length == 11 && number[0] === "0" && number[1] === "1") {
    if (moneyAmount === "") {
      alert("Add the amount!");
    } else if (moneyAmount < 0) {
      alert("Add valid amount!");
    } else if (pin == "1234") {
      if (balance === 0 || balance < money) {
        document.getElementById("transfer-form").innerHTML = `
        <section class="flex items-center justify-center flex-col gap-7">
        <div role="alert" class="alert alert-error">
<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span>You have not enough balance to Transfer! Check the balance.</span>
</div>


<button id="add-again-btn" class="btn btn-wide mx-auto">Try again</button>
        </section>`;
        document
          .getElementById("add-again-btn")
          .addEventListener("click", function () {
            document.getElementById("transfer-form").innerHTML =
              originalFormHTML;
            document
              .getElementById("btn-transfer-money")
              .addEventListener("click", handleTransferClick);
          });
      } else if (money > 25000) {
        alert("You Cannot Withdraw More than 25000!");
      } else {
        document.getElementById("main-balance").innerText =
          "$" + (balance - money);

        document.getElementById("transfer-form").innerHTML = `
            <section class="flex items-center justify-center flex-col gap-7">
            <div role="alert" class="alert alert-success">
  <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
  <span>Your money has been transferred Successfully!</span>
</div>
<button id="add-again-btn" class="btn btn-wide mx-auto">Transfer again</button>
            </section>`;

        document
          .getElementById("add-again-btn")
          .addEventListener("click", function () {
            document.getElementById("transfer-form").innerHTML =
              originalFormHTML;
            document
              .getElementById("btn-transfer-money")
              .addEventListener("click", handleTransferClick);
          });
        const div = document.createElement("div");
        div.classList.add(
          "flex",
          "justify-between",
          "items-center",
          "p-4",
          "bg-white",
          "border",
          "border-stone-300",
          "rounded-2xl"
        );
        div.innerHTML = `
            <div class="flex gap-3 items-center w-full">
              <img
                class="rounded-full bg-stone-300 p-2"
                src="./src/assets/wallet 1.png"
                alt=""
              />
              <div>
                <h3 class="font-semibold text-gray-700"> Bill Transferred</h3>
                <p class="text-xs text-stone-400">Today 01:44 AM</p>
              </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical cursor-pointer"></i>

              `;
        const history = document.getElementById("transaction-history");
        history.prepend(div);
      }
    } else {
      alert("Set Correct Pin!");
    }
  } else {
    alert("Number is invalid");
  }
}
document
  .getElementById("btn-transfer-money")
  .addEventListener("click", handleTransferClick);
