fetch("../scripts/products.json")
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( 
         data => {
          localStorage.setItem("products", JSON.stringify(data));
          if (!localStorage.getItem("cart")) {
            localStorage.setItem("cart", "[]");
          }
          initialize(data);
         } )
  
  .catch( err => console.error(`Fetch problem: ${err.message}`) );


function initialize() {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartIcon = document.querySelector(".cart-icon");

    function getTotal() {
        const temp = cart.map( item => {
          return parseInt(item.quantity);
        });

        const sum = temp.reduce( function(prev, next) {
          return prev + next;
        }, 0);
        cartIcon.textContent = sum;
    }

    getTotal();
}

