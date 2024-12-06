import { Button } from "antd"; // Importación de Button de Ant Design
import { useState } from "react"; // Importa useState para manejar el estado
import ListarHoteles from "../ListarHoteles/ListarHoteles"; // Componente para listar los hoteles
import FormularioHoteles from "../FormularioHoteles/FormularioHoteles"; // Componente para agregar un hotel

/**
 * Componente Hoteles que maneja la visualización de los hoteles y el formulario para agregar un nuevo hotel.
 * Utiliza el estado local para gestionar qué componente se debe mostrar (listar o formulario).
 */
const Hoteles = () => {
  // Estado para controlar qué componente mostrar
  const [showListar, setShowListar] = useState(false);
  const [showFormulario, setShowFormulario] = useState(false);

  /**
   * Manejador para mostrar el componente ListarHoteles.
   * Cambia el estado para mostrar el listado y ocultar el formulario.
   */
  const handleVerHoteles = () => {
    setShowListar(true); // Mostrar listado de hoteles
    setShowFormulario(false); // Ocultar formulario
  };

  /**
   * Manejador para mostrar el componente FormularioHoteles.
   * Cambia el estado para mostrar el formulario y ocultar el listado.
   */
  const handleAgregarHotel = () => {
    setShowFormulario(true); // Mostrar formulario de agregar hotel
    setShowListar(false); // Ocultar listado de hoteles
  };

  return (
    <div className="container mt-4">
      {" "}
      {/* Contenedor principal con margen superior */}
      <div className="d-flex mb-3">
        {" "}
        {/* Contenedor de botones con espacio entre ellos */}
        {/* Botón para agregar un nuevo hotel */}
        <Button type="primary" onClick={handleAgregarHotel} className="me-2">
          Agregar Hotel
        </Button>
        {/* Botón para ver los hoteles */}
        <Button type="primary" onClick={handleVerHoteles}>
          Ver Hoteles
        </Button>
      </div>
      {/* Aquí se muestran los componentes según el estado */}
      <div>
        {showListar && <ListarHoteles />}{" "}
        {/* Muestra el componente ListarHoteles si showListar es true */}
        {showFormulario && <FormularioHoteles />}{" "}
        {/* Muestra el componente FormularioHoteles si showFormulario es true */}
      </div>
    </div>
  );
};

export default Hoteles;
