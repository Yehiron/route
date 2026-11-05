import { useState, useEffect } from 'react'
import ProductoCard from './components/ProductoCard'

function Menu() {
    const [productos, setProductos] = useState([])
    
    useEffect(() => {
        async function cargar() {
            const respuesta = await fetch('/menu.json')
            const datos = await respuesta.json()
            setProductos(datos)
        }
        cargar()
    }, [])

    return(
        <section>
            <h2>Nuestro Menu</h2>
            <div>{productos.map((producto) => (
                <ProductoCard 
                    key={producto._id}
                    nombre={producto.nombre}
                    descripcion={producto.descripcion}
                    precio={producto.precio}
                />
            ))}</div>
        </section>
        )
}

export default Menu