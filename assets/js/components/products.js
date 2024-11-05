function products(products){
    //agregamos al loca storage la lista de productos
    const db = JSON.parse(localStorage.getItem('productos')) || [...products]
    console.log("mi db",db)    
    function printProducts(){
        const productsDOM = document.querySelector('.products__container')

        let htmlProduct =''
        for(let product of db){
            htmlProduct +=`
            <section class="product_container2">
              <section class="card">   
                <article class="product">
                    <div class="product__image">
                        <img src="${product.image}" alt="${product.name}">
                    </div>
                    <div class="product__content">
                        <button type="button" class="product__btn   add--to--cart" data-id="${product.id}">
                            <i class='bx bx-cart'></i>
                        </button>
                        <span class="product__price">Bs${product.price}</span>
                        <span class="product__stock">Disponibles: ${product.quantity}</span>
                        <h3 class="product__title">${product.name}</h3>
                    </div>
                </article>

                <article class="product_back">
                    <h2>Este es un Producto de poleras para todo los clientes interesados</h2>
                </article>
              </section>
            </section>    
                `
        }
        productsDOM.innerHTML = htmlProduct
        localStorage.setItem('productos',JSON.stringify(db))
    }
    printProducts()
    return{
        db, printProducts
    }



    
}

export default products