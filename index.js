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

// add to cart
// remove item from cart
if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}

function ready() {
  let removeItem = document.getElementsByClassName("remove-item");
  console.log(removeItem);
  for (let i = 0; i < removeItem.length; i++) {
    let button = removeItem[i];
    button.addEventListener("click", removeCartItem);
  }

  let quantityInput = document.getElementsByClassName("quantity-input");
  for (let i = 0; i < quantityInput.length; i++) {
    let input = quantityInput[i];
    input.addEventListener('change', quantityChange);
  }
  let addToCart = document.getElementsByClassName("add-to-cart");
  for (let i = 0; i < addToCart.length; i++) {
    let add = addToCart[i];
    add.addEventListener('click', addToCartClicked)
  }
}

function removeCartItem(event) {
  let clicked = event.target;
  clicked.parentElement.parentElement.remove();
  updateTotal();
}

function quantityChange(event) {
  let input = event.target
  if (isNaN(input.value) || input.value <= 0) {
    input.value = 1
  } 
  updateTotal()
}

function addToCartClicked(event) {
  let add = event.target
  let shopItem = add.parentElement.parentElement;
  let title = shopItem.getElementsByClassName("item-title")[0].innerText;
  let value = shopItem.getElementsByClassName("item-price")[0].innerText;
  let imgSrc = shopItem.getElementsByClassName("item-img")[0].src;
  console.log(title, value, imgSrc);
  addItemToCart(title, value, imgSrc);
}

function addItemToCart(title, value, imgSrc) {
  let cartRow = document.createElement("div");
  cartRow.innerText = title;
  let cartItems = document.getElementsByClassName("cart")[0];
  cartItems.append(cartRow);
}

//  update cart total
function updateTotal() {
  let cartContainer = document.getElementsByClassName("cart-content")[0];
  let total = 0;
  let cartContent = cartContainer.getElementsByClassName("cart-box");
  for (let i = 0; i < cartContent.length; i++) {
    let cartCon = cartContent[i];
    let priceElement = cartCon.getElementsByClassName("item-price")[0];
    let quantityElement = cartCon.getElementsByClassName("item-quantity")[0];

    let price = parseFloat(priceElement.innerText.replace("$", ""));
    let quantity = quantityElement.value;
    total = total + price * quantity;
  }
  total = Math.round(total * 100) / 100;
  document.getElementsByClassName("total-price")[0].innerText = "$" + total;
}
// end add to cart
