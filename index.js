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
};
closeCart.onclick = () => {
  cart.classList.remove("active");
};

// Cart Working
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

// Making Function
function ready() {
  // remove items from cart
  var removeCartBottons = document.getElementsByClassName("cart-remove");
  console.log(removeCartBottons);
  for (var i = 0; i < removeCartBottons.length; i++) {
    var button = removeCartBottons[i];
    button.addEventListener("click", removeCartItem);
  }
  // Quantity changes
  var quantityInputs = document.getElementsByClassName("cart-quantity");
  for (var i = 0; i < quantityInputs.length; i++) {
    var input = quantityInputs[i];
    input.addEventListener("change", quantityChanged);
  }
  // Add to cart
  var addCart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addCart.length; i++) {
    var button = addCart[i];
    button.addEventListener("click", addCartClicked);
  }
}

// remove items from cart
function removeCartItem(e) {
  var buttonClicked = e.target;
  buttonClicked.parentElement.parentElement.remove();
  updateCartTotal();
}
// quantity changes
function quantityChanged(e) {
  var input = e.target;
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1;
  }
  updateCartTotal();
}
// Add To Cart
function addCartClicked(e) {
  var button = e.target;
  var shopProducts = button.parentElement.parentElement;
  var title = shopProducts.getElementsByClassName("product-title")[0].innerText;
  var price = shopProducts.getElementsByClassName("price")[0].innerText;
  var productImg = shopProducts.getElementsByClassName("product-img")[0].src;
  addProductToCart(title, price, productImg);
  updateCartTotal();
}

function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-product-title");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[1].innerText == title) {
      alert("Item already added to cart");
      return;
    }
  }

var cartBoxContent = `

                     <img src="${productImg}" alt="">
                     <div class="detail-box">
                         <div class="cart-product-title">${title}</div>
                         <div class="cart-price">${price}</div>
                         <input type="number" value="1" class="cart-quantity">
                     </div>
                     <i class='bx bxs-trash cart-remove' ></i>`;

cartShopBox.innerHTML = cartBoxContent;
cartItems.append(cartShopBox);
cartShopBox
  .getElementsByClassName("cart-remove")[0]
  .addEventListener("click", removeCartItem);
cartShopBox
  .getElementsByClassName("cart-quantity")[0]
  .addEventListener("change", quantityChanged);
}
// Update Total
function updateCartTotal() {
  var cartContent = document.getElementsByClassName("cart-content")[0];
  var cartBox = cartContent.getElementsByClassName("cart-box");
  var total = 0;
  for (var i = 0; i < cartBox.length; i++) {
    var cartBoxer = cartBox[i];
    var priceElement = cartBoxer.getElementsByClassName("cart-price")[0];
    var quantityElement = cartBoxer.getElementsByClassName("cart-quantity")[0];
    var price = parseFloat(priceElement.innerText.replace("$", ""));
    var quantity = quantityElement.value;
    total = total + price * quantity;
    // if price contains some cents
    total = Math.round(total * 100) / 100;

    document.getElementsByClassName("total-price")[0].innerText = "$" + total;
  }
}
