document.getElementById("toggle-button").addEventListener("click", function () {
    var discountCode = document.getElementById("discount-code");

    if (discountCode.style.display === "none") {
        discountCode.style.display = "block";
        this.textContent = "Hide Discount Code";
    } else {
        discountCode.style.display = "none";
        this.textContent = "Show Discount Code";
    }
});
