import React from 'react';
// Importamos los "motores" (los archivos que creamos en la carpeta simulaciones)
import SimuladorFisicas from './simulaciones/SimuladorFisicas';
import SimuladorResortes from './simulaciones/SimuladorResortes';
import SimuladorParticulas from './simulaciones/SimuladorParticulas';

function Multimedia({ proyectoActual, siguienteProyecto, volverMenu }) {
  
  const renderizarSimulacion = () => {
    // Usamos .simulacion del objeto que llega
    switch(proyectoActual.simulacion) {
      case 'fisicas': return <SimuladorFisicas />;
      case 'resortes': return <SimuladorResortes />;
      case 'particulas': return <SimuladorParticulas />;
      default: return <div>Simulación no encontrada</div>;
    }
  };

  return (
    <div className="contenedor-multimedia" style={{ backgroundColor: proyectoActual.fondo }}>
      <div className="canvas-fondo">
        {renderizarSimulacion()}
      </div>
      
      <div className="flashcards-container">
        <h2>{proyectoActual.titulo}</h2>
        <button onClick={siguienteProyecto}>Siguiente Proyecto</button>
        <button onClick={volverMenu}>Volver al Menú</button>
      </div>
    </div>
  );
}
export default Multimedia; 