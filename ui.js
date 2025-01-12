document.addEventListener('DOMContentLoaded',async()=>{
    let products=await fetchProducts();
    console.log(products)
    displayProducts(products);
    document.getElementById('clear-cart').addEventListener('click',clearCart);
});

function truncateText(text,maxlength){
    return text.length > maxlength ? text.substring(0,maxlength)+('....'):text;
}

function displayProducts(products){
    let productList=document.getElementById('all-products')
    productList.innerHTML = '';
    products.forEach(product=>{
        let productCard=document.createElement('div');
        productCard.classList.add('m-3','col-10');
        productCard.innerHTML=`
        <div class="card single-product">
        <img src="${product.image}" class="card-img-top product-image" alt="${product.title}">
        <div class="card-body">
        <h5 class="card-title">${product.title}</h5>
        <p class="card-text">${truncateText(product.description,150)}</p>
        <p class='price'><strong>$${product.price}</strong></p>
        <button class="btn btn-success add-to-cart" data-id="${product.id} ">Add to Cart</button>
        </div>
        </div>
        `;
        productList.appendChild(productCard);
    });
    // productList.replaceWith(productList.cloneNode(true));
    // productList.addEventListener('click',event=>{
    //     if(event.target.classList.contains('add-to-cart')){
    //         console.log('add to cart clicked')
    //         let productId=parseInt(event.target.getAttribute('data-id'));
    //         let product= products.find(p=>p.id===productId);
    //         if(product){
    //             console.log(product);
    //             addToCart(product.id,product.price)

    //         }
    //     }
    // })
    
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', event => {
            let productId = parseInt(event.target.getAttribute('data-id'));
            let product = products.find(p => p.id === productId);
            console.log(product)
            document.getElementById("apply-promo").addEventListener("click", applyPromoCode);
            addToCart(product.id, product.price);
        });
    });

};