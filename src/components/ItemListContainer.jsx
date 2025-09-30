
import Item from './Item';
import getMockAPIdata from '../data/mockAPI';
import { useEffect, useState } from 'react';

export default function ItemListContainer(props) {
    //1° useState --> guardo el listado de items
    const [products, setProducts] = useState([]);
    //2° useEffect --> controlo la peticion de datos a la API (MockAPI)devolviendome despues de 2 seg el array se ejecuta el .then
    useEffect(() => {
        //3° fetch o solicitud simulada
        getMockAPIdata()
            .then((productList) => {
               //guardar el listado de productos en setProducts
               setProducts(productList);
            })
        .catch ( (error) => {
            console.log("Error solicitando los datos", error);
            alert("Algo salió mal buscando los productos")
        })
    }, [])

    return (
        <div className='item-list-container'>
            <h1>{props.greeting}</h1>
            {/* listado de productos */}
            {products.length === 0
            ? <p className="item-list-container__loading">Cargando</p>
            : ""
            }
            <div>
                <h3>Nuestros productos</h3>
                {/*abro llaves para meter js. en item.title vuelvo a usar jsx x eso pongo llaves de nuevo*/}
                <div className='div-products'>
                    {
                        products.map(item => <Item key={item.id} {...item} />)
                    }
                </div>
            </div>
        </div>
    )
}

//App le manda datos a ItemListContainer con props y ItemListContainer los muestra. 