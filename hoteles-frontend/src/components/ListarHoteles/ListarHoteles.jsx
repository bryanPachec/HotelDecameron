import { useEffect, useState } from 'react';  // Importamos React y los hooks
import { Table, notification } from 'antd';  // Importamos los componentes de Ant Design
import { getHoteles } from '../../services/HotelesService/HotelesService';  // Importamos el servicio getHoteles
import './ListarHoteles.css';  // Importamos los estilos CSS

const ListarHoteles = () => {
  const [hoteles, setHoteles] = useState([]);  // Estado para almacenar los hoteles
  
  // Llamada al servicio para obtener los hoteles
  const cargarHoteles = async () => {
    try {
      const data = await getHoteles();  // Obtenemos los hoteles con el servicio
      setHoteles(data);  // Establecemos los datos obtenidos en el estado
    } catch  {
      notification.error({
        message: 'Error al cargar los hoteles',
        description: 'Hubo un problema al intentar obtener los hoteles.',
      });
    }
  };

  useEffect(() => {
    cargarHoteles();  // Llamamos a la función para cargar los hoteles al montar el componente
  }, []);

  // Definimos las columnas de la tabla
  const columns = [
    {
      title: 'Nombre',
      dataIndex: 'nombre',
      key: 'nombre',
    },
    {
      title: 'Ciudad',
      dataIndex: 'ciudad',
      key: 'ciudad',
    },
    {
      title: 'Número de Habitaciones',
      dataIndex: 'numero_habitaciones',
      key: 'numero_habitaciones',
    },
    {
      title: 'Dirección',
      dataIndex: 'direccion',
      key: 'direccion',
    },
    {
      title: 'NIT',
      dataIndex: 'nit',
      key: 'nit',
    },
  ];

  return (
    <div className="listado-hoteles">
      <h2>Listado de Hoteles</h2>
      <p>Aquí se mostrará la lista de hoteles.</p>
      {/* Mostramos la tabla con los datos de los hoteles */}
      <Table
        dataSource={hoteles}  // Datos de los hoteles
        columns={columns}  // Columnas de la tabla
        rowKey="id"  // Asumimos que cada hotel tiene un identificador único 'id'
      />
    </div>
  );
};

export default ListarHoteles;
