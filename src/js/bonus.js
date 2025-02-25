function handleBonusClick() {
  const couponNumber = document.getElementById("coupon-number").value.trim();
  const bonusForm = document.getElementById("bonus-form");
  const originalHtml = bonusForm.innerHTML; // Store the original form

  if (couponNumber === "") {
    alert("Please Enter the Coupon!");
  } else if (couponNumber === "SIAMCDI420") {
    bonusForm.innerHTML = `
      <section class="flex items-center justify-center flex-col gap-7">
        <div role="alert" class="alert alert-vertical sm:alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-black h-6 w-6 shrink-0">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
  <span>HaHa! Now You can do that with Siam. No Bonus Available..</span>
</div>
        <button id="try-again-btn" class="btn btn-wide mx-auto">Go Back</button>
      </section>`;

    document
      .getElementById("try-again-btn")
      .addEventListener("click", function () {
        bonusForm.innerHTML = originalHtml;
        document
          .getElementById("btn-bonus")
          .addEventListener("click", handleBonusClick);
      });
  } else {
    bonusForm.innerHTML = `
      <section class="flex items-center justify-center flex-col gap-7">
        <div role="alert" class="alert alert-error">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span>Invalid Coupon!</span>
        </div>
        <div role="alert" class="alert alert-vertical sm:alert-horizontal">
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="stroke-black h-6 w-6 shrink-0">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
</svg>
  <span>You can use "SIAMCDI420" 😜.</span>
</div>
        <button id="try-again-btn" class="btn btn-wide mx-auto">Try Again</button>
      </section>`;

    document
      .getElementById("try-again-btn")
      .addEventListener("click", function () {
        bonusForm.innerHTML = originalHtml;
        document
          .getElementById("btn-bonus")
          .addEventListener("click", handleBonusClick);
      });
  }
}

document
  .getElementById("btn-bonus")
  .addEventListener("click", handleBonusClick);
