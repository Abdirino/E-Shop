// slider.js
$(document).ready(function () {
  $("#autoWidth").lightSlider({
    autoWidth: true,
    loop: true,
    onSliderLoad: function () {
      $("#autoWidth").removeClass("cS-hidden");
    },
  });
});
// slider.js end

// cart
let cartIcon = document.getElementById("cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.getElementById("close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
}
closeCart.onclick = () => {
  cart.classList.remove("active");
}
