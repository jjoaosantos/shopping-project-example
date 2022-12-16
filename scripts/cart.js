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
         } )
  
  .catch( err => console.error(`Fetch problem: ${err.message}`) );

  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartIcon = document.querySelector(".cart-icon");
  const main = document.querySelector("main");

  let finalGroup = [];
  finalGroup = cart.filter( product => product.image.includes(product.image));
  console.log(finalGroup);

  // function addItemToCart() {
  //   // const item = cart.filter( item => {
  //   //   return item.image;
  //   // });

  //   const product = cart.filter( item => item.image.includes(item.image));

  //   const section = document.createElement("section");
  //   const image = document.createElement("img");
  //   // section.setAttribute("class", `${cart.branding}`)
  //   // image.src = `../images/${product}`;
  //   main.appendChild(section);
  //   section.appendChild(image);
  //   console.log(product);
  // }

  // addItemToCart();

  function getTotal() {
    const temp = cart.map( item => {
      return parseInt(item.quantity);
      // return parseInt(item.price);
    });

    const sum = temp.reduce( function(prev, next) {
      return prev + next;
    }, 0);
    cartIcon.textContent = sum;
  }

  getTotal();