import { useState } from 'react';

function ProductoCard({ nombre, descripcion, precio }) {
  const [cantidad, setCantidad] = useState(0);

  return (
    <article>
      <h3>{nombre}</h3>
      <p>{descripcion}</p>
      <p>Precio: $ {precio}</p>
      <button onClick={() => setCantidad(cantidad + 1)}>Agregar</button>
      <p>En tu pedido: {cantidad}</p>
    </article>
  );
}

export default ProductoCard;