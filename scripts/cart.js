// fetch("../scripts/products.json")
//  .then( response => {
//     if (!response.ok) {
//       throw new Error(`HTTP error: ${response.status}`);
//     }
//     return response.json();
//  } )
//  .then( data => {
//     localStorage.setItem("products", JSON.stringify(data));
//     if (!localStorage.getItem("cart")) {
//       localStorage.setItem("cart", "[]");
//     }
//  } )
//  .catch( err => console.error(`Fetch problem: ${err.message}`) );

// const products = JSON.parse(localStorage.getItem("products"));
// const cart = JSON.parse(localStorage.getItem("cart"));

function addItemToCart(productId) {
    const product = products.find( product => {
      return product.id == productId;
    });

    if (cart.length === 0) {
      cart.push(product);
    } else {
      const res = cart.find(element => element.id == productId);
        if (res === undefined) {
          cart.push(product);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
}

function removeItemFromCart(productId) {
    const temp = cart.filter(item => item.id != productId);
    localStorage.setItem("cart", JSON.stringify(temp));
}

function updateQuantity(productId, quantity) {
  for (const product of cart) {
    if (product.id === productId) {
      product.quantity = quantity;
    }
  }

  localStorage.setItem("cart", JSON.stringify(cart));
}

// addItemToCart(1)
// addItemToCart(2)
// updateQuantity(2, 4);

// function getTotal() {
//   const temp = cart.map( item => {
//     return parseInt(item.price);
//   });

//   const sum = temp.reduce( function(prev, next) {
//     return prev + next;
//   }, 0);

//   console.log(sum);
// }

// getTotal();