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
export default getMockAPIdata;