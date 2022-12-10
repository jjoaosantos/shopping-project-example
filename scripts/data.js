fetch('../scripts/products.json')
  .then( response => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then( json => initialize(json) )
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
    const cart = document.querySelector(".cart-icon");

    section.setAttribute('class', product.branding);

    heading.textContent = product.name.replace(product.name.charAt(0), product.name.charAt(0).toUpperCase());

    para.textContent = `$${product.price}`;

    image.src = objectURL;
    image.alt = product.name;
    // let count = 0;
    // cart.textContent = count;

    // image.addEventListener("click", () => {
    //   localStorage.setItem(`${product.name}`, image.src);
    //   productsDisplayCheck();
    // })

    main.appendChild(section);
    section.appendChild(image);
    section.appendChild(heading);
    section.appendChild(para);
  }

  // function productsDisplayCheck() {
  //   if (localStorage.getItem(`${product.name}`)) {
  //     localStorage.getItem(`${product.name}`);

  //     count++;
  //     cart.textContent = count;
  //     console.log(count);
  //   }
  // }
}