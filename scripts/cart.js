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
    const aside = document.querySelector("aside");

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
        const h2 = document.createElement("h2");
        h2.textContent = "Shopping Cart";
        main.appendChild(h2);

        for (const product of finalGroup) {
          fetchBlob(product);
        }

        getTotal();
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
      const headerDiv = document.createElement('div');
      const removeBtn = document.createElement('button');
      const image = document.createElement('img');
      const heading = document.createElement('h3');
      const form = document.createElement('form');
      const label = document.createElement('label');
      const input = document.createElement('input');
      const mainDiv = document.createElement('div');
      const plusBtn = document.createElement('button');
      const minusBtn = document.createElement('button');
      const footerDiv = document.createElement('div');
      const paraP = document.createElement('p');
      const paraPValue = document.createElement('p');
      const paraT = document.createElement('p');
      const paraTValue = document.createElement('p');
      
      section.setAttribute('class', product.branding);
      
      headerDiv.setAttribute('class', 'product-header');
      removeBtn.setAttribute('class', 'remove-btn');
      removeBtn.addEventListener("click", () => {
        let productId = product.id;
        removeItemFromCart(productId);
        // updateDisplay();
      })

      image.src = objectURL;
      image.alt = product.name;
  
      heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

      form.addEventListener('submit', (e) => e.preventDefault());
      label.textContent = "Quantity";
      input.setAttribute('type', 'text');
      input.value = product.quantity;
      input.addEventListener("change", () => {
        updateTotal();
      });

      mainDiv.setAttribute('class', 'product-main');

      // plusBtn.setAttribute('type', 'button');
      plusBtn.setAttribute('class', 'plus-btn');
      plusBtn.addEventListener('click', () => {
        let productId = product.id;
        let quantity = Number(input.value) + 1;
        updateQuantity(productId, quantity);

        input.value = product.quantity;
        paraTValue.textContent = `$${product.price * product.quantity}`;
      });
      
      // minusBtn.setAttribute('type', 'button');
      minusBtn.setAttribute('class', 'minus-btn');
      minusBtn.addEventListener('click', () => {
        let productId = product.id;
        let quantity = Number(input.value) - 1;
        updateQuantity(productId, quantity);

        input.value = product.quantity;
        paraTValue.textContent = `$${product.price * product.quantity}`;
      });

      footerDiv.setAttribute('class', 'product-footer');
      paraP.textContent = 'Price';
      paraPValue.textContent = `$${product.price}`;
      paraT.textContent = 'Total';
      updateTotal();

      function updateTotal() {
        let productId = product.id;
        let quantity = input.value;
        updateQuantity(productId, quantity);

        paraTValue.textContent = `$${product.price * product.quantity}`;
      }

      main.appendChild(section);
      section.appendChild(headerDiv);
      headerDiv.appendChild(removeBtn);
      section.appendChild(image);
      section.appendChild(heading);
      section.appendChild(form);
      form.appendChild(label);
      form.appendChild(input);
      section.appendChild(mainDiv);
      mainDiv.appendChild(plusBtn);
      mainDiv.appendChild(minusBtn);
      section.appendChild(footerDiv);
      footerDiv.appendChild(paraP);
      footerDiv.appendChild(paraPValue);
      footerDiv.appendChild(paraT);
      footerDiv.appendChild(paraTValue);
    }

    function removeItemFromCart(productId) {
      const temp = cart.filter(item => item.id !== productId);
      localStorage.setItem("cart", JSON.stringify(temp));
      getTotal();
  
      const sum = temp.reduce( function(prev, next) {
        return prev - next;
      }, 0);
      cartIcon.textContent = sum;
    }

    function updateQuantity(productId, quantity) {
      for (let product of cart) {
        if (product.id === productId) {
          product.quantity = quantity;
        }
      }
      localStorage.setItem("cart", JSON.stringify(cart));
    }

    function getTotal() {
      const quantity = cart.map( item => {
        return parseInt(item.quantity);
      });

      const sum = quantity.reduce( function (prev, next) {
        return prev + next;
      }, 0);

      const temp = cart.map( item => {
        return parseInt(item.price);
      });

      const total = temp.reduce( function(prev, next) {
        return prev + next;
      }, 0);

      

      cartIcon.textContent = sum;
      
      const h2 = document.createElement('h2');
      h2.textContent = `Total cost $${total}`;
      aside.appendChild(h2);
    }

}