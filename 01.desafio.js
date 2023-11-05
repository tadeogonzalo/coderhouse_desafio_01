class ProductManager {

    constructor(){
        this.productos = [];
    }

    getProducts(){
        return this.productos;
    }

    addProduct(title, description, price, thumbnail, code, stock){

        if( title == '' || description == '' || price == '' || thumbnail == '' || code == '' || stock == '')
        {
            return "All fields are required";
        }

        let existe = this.productos.find(producto => producto.code == code)

        if(existe){

            return"The Product Code Already Exist.";

        }else{
            
            let productId = (this.getProducts()).length;
        
            let producto = {
                productId: ++productId,
                title: title,
                description: description,
                price: price,
                thumbnail: thumbnail,
                code: code,
                stock: stock
            }

            this.productos.push( producto );

            return this.productos;
        }

        
    }

    getProductById(productId){

        let producto = this.productos.find(producto => producto.productId == productId)

        if(producto){
            return producto;
        }else{
            return "Not Found"
        }
    }

}

const productManager = new ProductManager();

//Obtengo todos los productos
console.log( "Listado de Productos: ", productManager.getProducts() );

//Cargo un producto nuevo
producto = productManager.addProduct('producto prueba', 'Este es un producto de prueba', 200, 'Sin Imagen', "abc123", 25);
console.log( "Producto: ", producto );

//Cargo un producto nuevo
producto = productManager.addProduct('producto prueba', 'Este es un producto de prueba', 200, 'Sin Imagen', "abc123", 25);
console.log( "Producto: ", producto );

//Busco producto por ID inexistente
console.log( "Producto: ", productManager.getProductById(12) );

//Busco producto por ID 
console.log( "Producto: ", productManager.getProductById(1) );