import React, { useState } from 'react';
import Ingeniera from './components/Ingeniera';
import Multimedia from './components/Multimedia';
import MenuCapsula from './components/MenuCapsula'; // <--- Importamos tu nuevo componente
import { proyectos } from './data/proyectos';
import './App.css';

function App() {
  const [modo, setModo] = useState('capsula');
  const [indice, setIndice] = useState(0);

  const pasarSiguiente = () => {
    setIndice((prev) => (prev + 1) % proyectos.length);
  };

  return (
    <div className="app-container">
      {/* MODO CÁPSULA: Ahora carga tu diseño con Drag & Drop */}
      {modo === 'capsula' && (
        <MenuCapsula setModo={setModo} /> 
      )}
      
      {/* MODO INGENIERA */}
      {modo === 'ingeniera' && <Ingeniera />}
      
      {/* MODO MULTIMEDIA */}
      {modo === 'multimedia' && (
        <Multimedia 
          proyectoActual={proyectos[indice]} 
          siguienteProyecto={pasarSiguiente}
          volverMenu={() => setModo('capsula')} 
        />
      )}
    </div>
  );
}
export default App;