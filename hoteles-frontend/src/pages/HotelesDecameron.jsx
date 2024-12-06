import PropTypes from 'prop-types';  // Importamos PropTypes para validación de props
import { Menu } from 'antd';  // Usamos Ant Design para el menú
import { Link, Routes, Route } from 'react-router-dom';  // Para manejo de rutas
import "../styles/HotelesDecameron.css";  // Importamos los estilos
import Hoteles from '../components/Hoteles/Hoteles';
import TiposHabitacion from '../components/TiposHabitacion/TiposHabitacion';

// Componente MenuItems con responsabilidad única (SRP), solo muestra los elementos del menú
function MenuItems({ items }) {
  return (
    <Menu mode="inline" defaultSelectedKeys={['1']}>
      {items.map(item => (
        <Menu.Item key={item.key}>
          <Link to={item.path}>{item.label}</Link>
        </Menu.Item>
      ))}
    </Menu>
  );
}

MenuItems.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      path: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// Componente principal que gestiona las rutas y el contenido
function HotelesDecameron() {
  // Definir los items del menú de forma independiente para poder modificarlo sin afectar el componente
  const menuItems = [
    { key: '1', label: 'Hoteles', path: '/hoteles' },
    { key: '2', label: 'Tipos de Habitaciones', path: '/tipos-habitacion' },
  ];

  return (
    <div className="container">
      <div className="col-md-12 d-flex justify-content-center align-items-center contenedor-fondo">
        <h1 className="titulo-hotel">Bienvenidos a Hoteles Decameron</h1>
      </div>
      <div className="col-md-12 d-flex contenido-hotel">
        {/* El patrón de Composición se aplica aquí al pasar los items del menú como props */}
        <div className="col-md-2 contenedor-menu">
          <MenuItems items={menuItems} />
        </div>
        <div className="col-md-10 contenedor-contenido">
          {/* Aquí gestionamos las rutas, cada ruta debe ser responsable de cargar su componente correspondiente */}
          <Routes>
            <Route path="/hoteles" element={<Hoteles />} />
            <Route path="/tipos-habitacion" element={<TiposHabitacion />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HotelesDecameron;

