document.getElementById("transaction-money").style.borderColor = "#0874F2";
document.getElementById("transaction-money").style.background =
  "rgba(8, 116, 242, 0.05)";
document.querySelectorAll("#transaction-money p").forEach((p) => {
  p.style.color = "black";
});

document.getElementById("add-money").addEventListener("click", function () {
  window.location.href = "./add.html";
});

document.getElementById("cash-out").addEventListener("click", function () {
  window.location.href = "./cashout.html";
});
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    window.location.href = "./transfer.html";
  });
document.getElementById("pay-bill").addEventListener("click", function () {
  window.location.href = "./pay.html";
});
document.getElementById("btn-logout").addEventListener("click", function () {
  window.location.href = "./index.html";
});
document.getElementById("bonus-coupon").addEventListener("click", function () {
  window.location.href = "./bonus.html";
});
