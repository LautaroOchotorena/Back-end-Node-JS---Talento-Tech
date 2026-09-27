const args = process.argv.slice(2);

const productId = args[1].split("products/")[1];
if (args[0] == 'GET') {
    if (productId) {
        const response = await fetch(`https://fakestoreapi.com/products/${productId}`);
        const data = await response.json();

        console.log(data);
    }
    else if (args[1] == 'products') {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();

        console.log(data);
    }
    else{
        console.log('No se reconoce el comando');
    }
}
else if (args[0] == 'POST') {
    if (args[1] == 'products') {
        const title = args[2];
        const priece = parseFloat(args[3]);
        const category = args[4];
        const product = { title: title, price: priece, category: category};
        const response = await fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
        })
        const data = await response.json();
        
        console.log('Producto creado:');
        console.log(data);
    }
    else{
        console.log('No se reconoce el comando');
    }
}
else if(args[0] == 'DELETE' && productId) {
    const response = await fetch(`https://fakestoreapi.com/products/${productId}`, {
    method: 'DELETE'
    })
    const data = await response.json();

    console.log(`Producto con ID ${productId} eliminado:`);
    console.log(data);
}
else{
    console.log('No se reconoce el comando');
}
