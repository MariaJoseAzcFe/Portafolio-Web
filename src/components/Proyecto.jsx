import './Proyecto.css';
function Proyecto(titulo, descripcion, tecnologias) {
  return (
    <div className="tarjeta-proyecto">
      <h2>{titulo}</h2>
      <p>{descripcion}</p>
      
      <div>
        <strong>Tecnologías usadas:</strong>
        <ul>
          <li>Frontend: HTML, CSS y JavaScript puro</li>
          <li>Backend: Java y PHP</li>
        </ul>
      </div>
      
      <button className="btn-detalles">Ver detalles</button>
    </div>
  )
}

export default Proyecto