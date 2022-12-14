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
  const branding = document.querySelector('#brand');
  const searchTerm = document.querySelector('#searchTerm');
  const searchBtn = document.querySelector('#searchBtn');
  const main = document.querySelector('main');

  let lastBranding = branding.value;
  let lastSearch = '';

  let brandingGroup;
  let finalGroup;

  finalGroup = products;
  updateDisplay();

  brandingGroup = [];
  finalGroup = [];

  searchBtn.addEventListener('click', selectBranding);

  function selectBranding(e) {
    e.preventDefault();

    brandingGroup = [];
    finalGroup = [];

    if (branding.value === lastBranding && searchTerm.value.trim() === lastSearch) {
      return;
    } else {
      lastBranding = branding.value;
      lastSearch = searchTerm.value.trim();
      if (branding.value === 'All') {
        brandingGroup = products;
        selectProducts();
      } else {
        const lowerCaseType = branding.value.toLowerCase();
        brandingGroup = products.filter( product => product.branding === lowerCaseType );
        selectProducts();
      }
    }
  }

  function selectProducts() {
    if (searchTerm.value.trim() === '') {
      finalGroup = brandingGroup;
    } else {
      const lowerCaseSearchTerm = searchTerm.value.trim().toLowerCase();
      finalGroup = brandingGroup.filter( product => product.name.includes(lowerCaseSearchTerm));
    }
    updateDisplay();
  }

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

    heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

    para.textContent = `$${product.price}`;

    image.src = objectURL;
    image.alt = product.name;
    image.addEventListener("click", addItemToCart);

    main.appendChild(section);
    section.appendChild(image);
    section.appendChild(heading);
    section.appendChild(para);
  }

  const items = JSON.parse(localStorage.getItem("products"));
  const cart = JSON.parse(localStorage.getItem("cart"));
  const cartIcon = document.querySelector(".cart-icon");

  function addItemToCart() {
    const item = products.find( product => {
      return product.id === product.id;
    });

    if (cart.length === 0) {
      cart.push(item);
    } else {
      const res = cart.find(element => element.id === element.id);
        if (res === undefined) {
          cart.push(item);
        }
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    // getTotal();
  }

  // addItemToCart(3);
  // addItemToCart(2);
  // addItemToCart(3);

  function removeItemFromCart(productId) {
    const temp = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(temp));
  }

  // removeItemFromCart(1);

  function updateQuantity(productId, quantity) {
    for (const item of cart) {
      if (item.id === productId) {
        item.quantity = quantity;
        cartIcon.textContent = product.quantity;
      }
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
  }

  // updateQuantity(1, 1);
  // updateQuantity(2, 1);

  // removeItemFromCart(1);
  // removeItemFromCart(2);
  // removeItemFromCart(3);

  function getTotal() {
    const temp = cart.map( item => {
      return parseInt(item.quantity);
      // return parseInt(item.price);
    });

    const sum = temp.reduce( function(prev, next) {
      return prev + next;
    }, 0);

    console.log(sum);
    cartIcon.textContent = sum;
  }

  getTotal();
}

