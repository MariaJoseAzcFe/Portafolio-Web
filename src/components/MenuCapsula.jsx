import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import mariaJoseGif from '../assets/mariajose.gif';

function MenuCapsula({ setModo }) {
  const constraintRef = useRef(null);
  const dropZoneRef = useRef(null); 
  
  const [etiquetaSeleccionada, setEtiquetaSeleccionada] = useState(null);

  const handleDragEnd = (event, info, targetMode) => {
    if (!dropZoneRef.current) return;
    
    const rect = dropZoneRef.current.getBoundingClientRect();
    const dropLeft = rect.left + window.scrollX;
    const dropRight = rect.right + window.scrollX;
    const dropTop = rect.top + window.scrollY;
    const dropBottom = rect.bottom + window.scrollY;

    const { x, y } = info.point;
    const margen = 60; 

    if (
      x >= (dropLeft - margen) &&
      x <= (dropRight + margen) &&
      y >= (dropTop - margen) &&
      y <= (dropBottom + margen)
    ) {
      setEtiquetaSeleccionada(targetMode);

      setTimeout(() => {
        setModo(targetMode); 
      }, 1400);
    }
  };

  return (
   <div className="capsula-screen" ref={constraintRef} style={{ width: '100vw', height: '100vh', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: '#c5bda7', padding: '1vh 2vw', boxSizing: 'border-box' }}>
      
      {/* ANIMACIÓN DIRECTA DE TU NOMBRE */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '2vh' }}>
        <img 
          src={mariaJoseGif} 
          alt="María José" 
          style={{
            width: 'clamp(250px, 95vw, 4050px)',
            height: 'auto',
            objectFit: 'contain',
            display: 'block'
          }}
        />
      </div>

      {/* LÍNEA DEL "es:" Y EL RECUADRO ADAPTABLE */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', margin: 0, paddingTop: 0 }}>
        <span style={{ 
          fontSize: 'clamp(50px, 10vw, 5rem)', 
          fontFamily: '"Delicious Handrawn", cursive',  
          color: '#726a3c'
        }}>
          es:
        </span>
        
        <div
          ref={dropZoneRef}
          style={{
            /* Si hay etiqueta, se ajusta al contenido; si no, mantiene un tamaño base */
            width: etiquetaSeleccionada ? 'fit-content' : 'clamp(200px, 28vw, 320px)',
            height: etiquetaSeleccionada ? 'auto' : 'clamp(45px, 6vh, 65px)',
            padding: etiquetaSeleccionada ? '4px' : '0px',
            border: '4px dashed #636156',
            borderRadius: '15px',
            backgroundColor: 'rgba(255,255,255,0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'all 0.2s ease-in-out'
          }}
        >
          {etiquetaSeleccionada && (
            <div style={{
              backgroundColor: '#fff',
              border: '3px solid #222',
              borderRadius: '10px',
              padding: '10px 30px',
              fontFamily: '"Delicious Handrawn", cursive',
              fontSize: '1.8rem',
              fontWeight: 'bold',
              boxShadow: '3px 3px 0px #222',
              whiteSpace: 'nowrap'
            }}>
              {etiquetaSeleccionada === 'ingeniera' ? 'Ingeniera' : 'Multimedia'}
            </div>
          )}
        </div>
      </div>

      {/* BLOQUE INFERIOR (Ocupa el 100% del ancho horizontal y el resto vertical) */}

      <div style={{ display: 'flex', gap: '6vw', alignItems: 'center', justifyContent: 'space-evenly', width: '100%', flex: 1, padding: '0 4vw 2vh 4vw', boxSizing: 'border-box' }}>
        
        {/* La Cápsula del Avatar (Más grande y proporcionada) */}
        <div style={{ width: 'clamp(300px, 28vw, 350px)', height: 'clamp(300px, 60vh, 750px)', border: '6px solid #222', borderRadius: '150px', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', boxShadow: 'inset 0 0 25px rgba(0,0,0,0.1)', flexShrink: 0 }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontSize: 'clamp(3.5rem, 7vw, 6rem)' }}>👩🏻‍💻</div>
            <p style={{ color: '#666', fontStyle: 'italic', marginTop: '10px', fontSize: 'clamp(0.8rem, 1.2vw, 1rem)' }}>Tu avatar irá aquí</p>
          </div>
        </div>

        {/* Las Etiquetas Arrastrables (Más grandes y llamativas) */}
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 'clamp(20px, 3vh, 35px)', flexShrink: 0, opacity: etiquetaSeleccionada ? 0 : 1, transition: 'opacity 0.2s' }}>
          
          <motion.div
            drag={!etiquetaSeleccionada}
            dragConstraints={constraintRef}
            dragMomentum={false} 
            dragSnapToOrigin={true} 
            onDragEnd={(e, info) => handleDragEnd(e, info, 'ingeniera')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            whileDrag={{ 
              rotate: [-4, 4, -4], 
              transition: { repeat: Infinity, duration: 0.3, ease: "linear" } 
            }}
            style={{ padding: 'clamp(14px, 2vh, 22px) clamp(35px, 4vw, 55px)', backgroundColor: '#fff', border: '4px solid #222', borderRadius: '20px', fontSize: 'clamp(1.6rem, 2.5vw, 2.5rem)', fontFamily: '"Delicious Handrawn", cursive', fontWeight: 'bold', cursor: 'grab', boxShadow: '5px 5px 0px #222', zIndex: 10, textAlign: 'center' }}
          >
            Ingeniera
          </motion.div>

          <motion.div
            drag={!etiquetaSeleccionada}
            dragConstraints={constraintRef}
            dragMomentum={false} 
            dragSnapToOrigin={true} 
            onDragEnd={(e, info) => handleDragEnd(e, info, 'multimedia')}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95, cursor: 'grabbing' }}
            whileDrag={{ 
              rotate: [-4, 4, -4], 
              transition: { repeat: Infinity, duration: 0.3, ease: "linear" } 
            }}
            style={{ padding: 'clamp(14px, 2vh, 22px) clamp(35px, 4vw, 55px)', backgroundColor: '#fff', border: '4px solid #222', borderRadius: '20px', fontSize: 'clamp(1.6rem, 2.5vw, 2.5rem)', fontFamily: '"Delicious Handrawn", cursive', fontWeight: 'bold', cursor: 'grab', boxShadow: '5px 5px 0px #222', zIndex: 10, textAlign: 'center' }}
          >
            Multimedia
          </motion.div>

        </div>
      </div>
    </div>
  );
}

export default MenuCapsula;