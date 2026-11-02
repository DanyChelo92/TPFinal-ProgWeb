import { useState, useEffect } from 'react'

export default function Inicio() {
  const [personajes, setPersonajes] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    function pedirDatos() {
      fetch('https://rickandmortyapi.com/api/character')
        .then((respuesta) => respuesta.json())
        .then((datos) => {
          setPersonajes(datos.results)
          setCargando(false)
        })
    }

    pedirDatos()
  }, [])

  if (cargando) {
    return <div className="contenedor"><p>Cargando datos de la API...</p></div>
  }

  return (
    <div className="contenedor">
      <h1>Personajes (API Externa)</h1>
      <p>Listado obtenido de la API publica de Rick and Morty.</p>
      <div className="grilla">
        {personajes.map((p) => (
          <div className="tarjeta" key={p.id}>
            <img src={p.image} alt={p.name} />
            <div className="tarjeta-cuerpo">
              <h3>{p.name}</h3>
              <p><strong>Estado:</strong> {p.status}</p>
              <p><strong>Especie:</strong> {p.species}</p>
              <p><strong>Genero:</strong> {p.gender}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
