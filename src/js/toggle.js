const mainPage = document.getElementById("latest-main");
mainPage.style.display = "block";
const addPage = document.getElementById("add-main");
addPage.style.display = "none";
const cashOut = document.getElementById("cashout-main");
cashOut.style.display = "none";
const transferCash = document.getElementById("transfer-main");
transferCash.style.display = "none";
const bonus = document.getElementById("bonus-main");
bonus.style.display = "none";
const payBill = document.getElementById("pay-bill-main");
payBill.style.display = "none";
const transaction = document.getElementById("transaction-main");
transaction.style.display = "none";

const addMoneyBtn = document.getElementById("add-money");
const cashOutBtn = document.getElementById("cash-out");
const transferCashBtn = document.getElementById("transfer-money");
const bonusBtn = document.getElementById("bonus-coupon");
const payBillBtn = document.getElementById("pay-bill");
const transactionBtn = document.getElementById("transaction-money");

document.getElementById("add-money").addEventListener("click", function () {
  transferCash.style.display = "none";
  mainPage.style.display = "none";
  cashOut.style.display = "none";
  addPage.style.display = "block";
  bonus.style.display = "none";
  payBill.style.display = "none";
  transaction.style.display = "none";
  addMoneyBtn.classList.add("active-btn");
  cashOutBtn.classList.remove("active-btn");
  transferCashBtn.classList.remove("active-btn");
  bonusBtn.classList.remove("active-btn");
  transactionBtn.classList.remove("active-btn");
  payBillBtn.classList.remove("active-btn");
});
document.getElementById("cash-out").addEventListener("click", function () {
  mainPage.style.display = "none";
  addPage.style.display = "none";
  transferCash.style.display = "none";
  cashOut.style.display = "block";
  bonus.style.display = "none";
  payBill.style.display = "none";
  transaction.style.display = "none";
  addMoneyBtn.classList.remove("active-btn");
  cashOutBtn.classList.add("active-btn");
  transferCashBtn.classList.remove("active-btn");
  bonusBtn.classList.remove("active-btn");
  transactionBtn.classList.remove("active-btn");
  payBillBtn.classList.remove("active-btn");
});
document
  .getElementById("transfer-money")
  .addEventListener("click", function () {
    mainPage.style.display = "none";
    addPage.style.display = "none";
    transferCash.style.display = "block";
    cashOut.style.display = "none";
    bonus.style.display = "none";
    payBill.style.display = "none";
    transaction.style.display = "none";
    addMoneyBtn.classList.remove("active-btn");
    cashOutBtn.classList.remove("active-btn");
    transferCashBtn.classList.add("active-btn");
    bonusBtn.classList.remove("active-btn");
    transactionBtn.classList.remove("active-btn");
    payBillBtn.classList.remove("active-btn");
  });
document.getElementById("bonus-coupon").addEventListener("click", function () {
  mainPage.style.display = "none";
  addPage.style.display = "none";
  transferCash.style.display = "none";
  cashOut.style.display = "none";
  bonus.style.display = "block";
  payBill.style.display = "none";
  transaction.style.display = "none";
  addMoneyBtn.classList.remove("active-btn");
  cashOutBtn.classList.remove("active-btn");
  transferCashBtn.classList.remove("active-btn");
  bonusBtn.classList.add("active-btn");
  transactionBtn.classList.remove("active-btn");
  payBillBtn.classList.remove("active-btn");
});
document.getElementById("pay-bill").addEventListener("click", function () {
  mainPage.style.display = "none";
  addPage.style.display = "none";
  transferCash.style.display = "none";
  cashOut.style.display = "none";
  bonus.style.display = "none";
  payBill.style.display = "block";
  transaction.style.display = "none";
  addMoneyBtn.classList.remove("active-btn");
  cashOutBtn.classList.remove("active-btn");
  transferCashBtn.classList.remove("active-btn");
  bonusBtn.classList.remove("active-btn");
  transactionBtn.classList.remove("active-btn");
  payBillBtn.classList.add("active-btn");
});
document
  .getElementById("transaction-money")
  .addEventListener("click", function () {
    mainPage.style.display = "none";
    addPage.style.display = "none";
    transferCash.style.display = "none";
    cashOut.style.display = "none";
    bonus.style.display = "none";
    payBill.style.display = "none";
    transaction.style.display = "block";
    addMoneyBtn.classList.remove("active-btn");
    cashOutBtn.classList.remove("active-btn");
    transferCashBtn.classList.remove("active-btn");
    bonusBtn.classList.remove("active-btn");
    transactionBtn.classList.add("active-btn");
    payBillBtn.classList.remove("active-btn");
  });
