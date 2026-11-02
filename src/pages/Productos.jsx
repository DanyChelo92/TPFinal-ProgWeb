import { useState } from 'react'

export default function Productos() {
  const listaLocal = [
    {
      id: 1,
      nombre: 'Notebook Lenovo',
      precio: '$850.000',
      categoria: 'Computacion',
      descripcion: 'Notebook potente para estudio y desarrollo web.',
      imagen: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=400&q=80'
    },
    {
      id: 2,
      nombre: 'Auriculares Inalambricos',
      precio: '$45.000',
      categoria: 'Audio',
      descripcion: 'Auriculares con cancelacion de ruido y microfono.',
      imagen: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&q=80'
    },
    {
      id: 3,
      nombre: 'Teclado Mecanico',
      precio: '$65.000',
      categoria: 'Perifericos',
      descripcion: 'Teclado retroiluminado RGB con switches azules.',
      imagen: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=400&q=80'
    },
    {
      id: 4,
      nombre: 'Mouse Gamer',
      precio: '$32.000',
      categoria: 'Perifericos',
      descripcion: 'Mouse ergonomico con sensor optico de alta precision.',
      imagen: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&q=80'
    },
    {
      id: 5,
      nombre: 'Monitor 24 Pulgadas',
      precio: '$210.000',
      categoria: 'Monitores',
      descripcion: 'Monitor Full HD IPS ideal para programar y trabajar.',
      imagen: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=400&q=80'
    },
    {
      id: 6,
      nombre: 'Silla Ergonomica',
      precio: '$180.000',
      categoria: 'Muebles',
      descripcion: 'Silla de oficina con soporte lumbar y altura regulable.',
      imagen: 'https://images.unsplash.com/photo-1580481077194-c3c153444458?w=400&q=80'
    }
  ]

  const [productos] = useState(listaLocal)

  return (
    <div className="contenedor">
      <h1>Nuestros Productos (Datos Locales)</h1>
      <p>Listado cargado a partir de un array de objetos local.</p>
      <div className="grilla">
        {productos.map((item) => (
          <div className="tarjeta" key={item.id}>
            <img src={item.imagen} alt={item.nombre} />
            <div className="tarjeta-cuerpo">
              <h3>{item.nombre}</h3>
              <p><strong>Categoria:</strong> {item.categoria}</p>
              <p><strong>Precio:</strong> {item.precio}</p>
              <p>{item.descripcion}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
