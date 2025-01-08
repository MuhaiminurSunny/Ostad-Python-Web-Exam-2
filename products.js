
async function fetchProducts() {
  try {
    const response = await fetch('./products.json'); // Ensure `products.json` is in the same directory as `index.html`
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const products = await response.json();
    
    displayProducts(products); // Call a function to display products in the HTML
    return products;
  } catch (error) {
    console.error('Error fetching products:', error);
  }
}
