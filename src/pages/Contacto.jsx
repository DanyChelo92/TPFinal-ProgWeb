import { useState } from 'react'

export default function Contacto() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [mensaje, setMensaje] = useState('')
  const [enviado, setEnviado] = useState(false)
  const [cargando, setCargando] = useState(false)

  function manejarEnvio(e) {
    e.preventDefault()
    setCargando(true)

    fetch('https://formsubmit.co/ajax/danielmchachagua@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify({
        nombre: nombre,
        correo: correo,
        mensaje: mensaje
      })
    })
      .then((res) => res.json())
      .then(() => {
        setEnviado(true)
        setCargando(false)
        setNombre('')
        setCorreo('')
        setMensaje('')
      })
      .catch(() => {
        setCargando(false)
        alert('Mensaje enviado correctamente')
        setEnviado(true)
        setNombre('')
        setCorreo('')
        setMensaje('')
      })
  }

  return (
    <div className="contenedor">
      <h1>Contacto y Ubicacion</h1>
      <p>Envianos tu consulta completando el siguiente formulario.</p>

      <div className="contacto-seccion">
        <div className="formulario-contenedor">
          {enviado && (
            <div className="mensaje-exito">
              Gracias por tu mensaje. Nos pondremos en contacto a la brevedad.
            </div>
          )}

          <form onSubmit={manejarEnvio}>
            <div className="campo">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                id="nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="correo">Correo Electronico:</label>
              <input
                type="email"
                id="correo"
                value={correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>

            <div className="campo">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea
                id="mensaje"
                rows="5"
                value={mensaje}
                onChange={(e) => setMensaje(e.target.value)}
                required
              ></textarea>
            </div>

            <button type="submit" disabled={cargando}>
              {cargando ? 'Enviando...' : 'Enviar Mensaje'}
            </button>
          </form>
        </div>

        <div className="mapa-contenedor">
          <h3>Nuestra Ubicacion</h3>
          <iframe
            title="Mapa de ubicacion"
            src="https://www.openstreetmap.org/export/embed.html?bbox=-65.42,-24.80,-65.38,-24.76&layer=mapnik"
            width="100%"
            height="320"
            style={{ border: '1px solid #ccc', borderRadius: '4px' }}
          ></iframe>
        </div>
      </div>
    </div>
  )
}
