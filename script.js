let cartFile = document.querySelector(".cart-file");
        let cartNum = document.getElementById("cart-num");
        let toCart = document.getElementById("add");
        var name = toCart.parentElement.children[0].innerHTML;
        var current = JSON.parse(sessionStorage.getItem("cart"));
            if(current != null){
            cartNum.innerHTML = current[name];
            
            cartFile.style.visibility = "visible";
            toCart.innerHTML = "Remove from Cart";
            // toCart.style.padding = "10px 20px";
            }
        toCart.addEventListener("click", () => {
            var object = {};
                object[name] = 1;
            current = JSON.parse(sessionStorage.getItem("cart"));
            // toCart.style.padding = "10px";
            if(current == null){
                sessionStorage.setItem("cart", JSON.stringify(object))
                cartNum.innerHTML = 1;
                cartFile.style.visibility = "visible";
                toCart.innerHTML = "Remove from Cart";
            }else{
            cartNum.innerHTML = current[name];
            cartFile.style.visibility = "hidden";
            sessionStorage.removeItem("cart");
            toCart.innerHTML = "Add to Cart";
            }        })