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

function initialize(products) {
    const cart = JSON.parse(localStorage.getItem("cart"));
    const cartIcon = document.querySelector(".cart-icon");
    const main = document.querySelector("main");

    let finalGroup = [];
    finalGroup = cart.filter( product => product.image.includes(product.image));
    updateDisplay();

    function updateDisplay() {
      while (main.firstChild) {
        main.removeChild(main.firstChild);
      }
  
      if (finalGroup.length === 0) {
        const para = document.createElement('p');
        para.textContent = 'No results to display!';
        main.appendChild(para);
      } else {
        for (const product of finalGroup) {
          fetchBlob(product);
        }
      }
    }

    function fetchBlob(product) {
      const url = `../images/${product.image}`;
      fetch(url)
        .then( response => {
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
          return response.blob();
        })
        .then( blob => showProduct(blob, product) )
        .catch( err => console.error(`Fetch problem: ${err.message}`) );
    }

    function showProduct(blob, product) {
      const objectURL = URL.createObjectURL(blob);
      const section = document.createElement('section');
      const heading = document.createElement('h2');
      const para = document.createElement('p');
      const image = document.createElement('img');
  
      section.setAttribute('class', product.branding);
  
      image.src = objectURL;
      image.alt = product.name;
  
      heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());
  
      para.textContent = `$${product.price}`;
   
      main.appendChild(section);
      section.appendChild(image);
      section.appendChild(heading);
      section.appendChild(para);
    }

    getTotal();

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

}