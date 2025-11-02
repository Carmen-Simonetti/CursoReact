import products from './products'
function getMockAPIdata() {
    const promiseProducts = new Promise((res, rej) => {
        setTimeout(() => {
            res(products)
        }, 2000) //la promesa se resuelve dsp de 5 seg
    })
    return promiseProducts;
}



export function getProductById(idRequested) {
    //buscamos un unico valor con find
    //forEach, .map, .find
    const reqItem = products.find((item) => item.id === Number(idRequested))
    const promiseProduct = new Promise((res, rej) => {
        setTimeout(() => {
            console.log(reqItem);
            res(reqItem)
        }, 1000)
    })
return promiseProduct
}


export function getProductByCateg (categRequested) {
    //genero un nuevo array me devuelve el valor que cumpla cierta condicion
    const productsFilter = products.filter ( item => item.category === categRequested);

    return new Promise ( (resolve) => {
        setTimeout ( () => {
            console.log("productos devueltos..", productsFilter);
            
resolve (productsFilter)
        } , 1000)
    })

}

export default getMockAPIdata;