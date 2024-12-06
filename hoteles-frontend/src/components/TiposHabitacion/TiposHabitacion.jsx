import { useState, useEffect } from 'react';
import { Form, Input, Select, Button, Modal } from 'antd'; // Usar Modal para advertencia
import { getHoteles } from '../../services/HotelesService/HotelesService';
import { addTipoHabitacion } from '../../services/TiposHabitacionService/TipoHabitacionService';

const { Option } = Select;

const TiposHabitacion = () => {
  const [hoteles, setHoteles] = useState([]); // Lista de hoteles
  const [tipoHabitacion, setTipoHabitacion] = useState(null); // Estado para el tipo de habitación seleccionado
  const [modalVisible, setModalVisible] = useState(false); // Estado para controlar el modal
  const [maxHabitaciones, setMaxHabitaciones] = useState(1); // Estado para el número máximo de habitaciones

  // Obtener los hoteles al cargar el componente
  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const data = await getHoteles();
        setHoteles(data);
      } catch (error) {
        console.error('Error al obtener los hoteles:', error);
        Modal.error({
          title: 'Error al cargar los hoteles',
          content: 'Hubo un problema al intentar obtener los hoteles.',
        });
      }
    };

    fetchHoteles();
  }, []);

  // Manejar el cambio de Tipo de Habitación
  const handleTipoHabitacionChange = (value) => {
    setTipoHabitacion(value); // Establecer el tipo de habitación seleccionado
  };

  // Manejar el intento de seleccionar Acomodación sin Tipo de Habitación
  const handleAcomodacionFocus = () => {
    if (!tipoHabitacion) {
      setModalVisible(true); // Mostrar el modal de advertencia
    }
  };

  // Manejar el envío del formulario
  const onFinish = async (values) => {
    const { hotel_id, cantidad, tipo_habitacion, acomodacion } = values;

    try {
      const response = await addTipoHabitacion({
        hotel_id,
        cantidad,
        tipo_habitacion,
        acomodacion,
      });
      console.log('Respuesta del servidor:', response);
      Modal.success({
        title: 'Éxito',
        content: 'Tipo de habitación agregado exitosamente.',
      });
    } catch (error) {
      console.error('Error al agregar el tipo de habitación:', error);
      Modal.error({
        title: 'Error',
        content: 'Hubo un error al agregar el tipo de habitación.',
      });
    }
  };

  // Actualizar el número máximo de habitaciones cuando se selecciona un hotel
  const handleHotelChange = (value) => {
    const hotelSeleccionado = hoteles.find(hotel => hotel.id === value);
    setMaxHabitaciones(hotelSeleccionado.numero_habitaciones); // Asumiendo que cada hotel tiene un atributo 'numero_habitaciones'
  };

  return (
    <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
      <h2>Tipos de Habitaciones</h2>
      <Form layout="vertical" onFinish={onFinish}>
        {/* Seleccionar Hotel */}
        <Form.Item
          name="hotel_id"
          label="Seleccionar Hotel"
          rules={[{ required: true, message: 'Por favor selecciona un hotel.' }]}
        >
          <Select placeholder="Selecciona un hotel" onChange={handleHotelChange}>
            {hoteles.map((hotel) => (
              <Option key={hotel.id} value={hotel.id}>
                {hotel.nombre}
              </Option>
            ))}
          </Select>
        </Form.Item>

        {/* Cantidad */}
        <Form.Item
          name="cantidad"
          label="Cantidad"
          rules={[{ required: true, message: 'Por favor ingresa la cantidad.' }]}
        >
          <Input type="number" placeholder="Cantidad" min={1} max={maxHabitaciones} />
        </Form.Item>

        {/* Tipo de Habitación */}
        <Form.Item
          name="tipo_habitacion"
          label="Tipo de Habitación"
          rules={[{ required: true, message: 'Por favor selecciona un tipo de habitación.' }]}
        >
          <Select
            placeholder="Selecciona un tipo"
            onChange={handleTipoHabitacionChange} // Manejar el cambio de tipo
          >
            <Option value="Estándar">Estándar</Option>
            <Option value="Junior">Junior</Option>
            <Option value="Suite">Suite</Option>
          </Select>
        </Form.Item>

        {/* Acomodación */}
        <Form.Item
          name="acomodacion"
          label="Acomodación"
          rules={[{ required: true, message: 'Por favor selecciona una acomodación.' }]}
        >
          <Select
            placeholder="Selecciona una acomodación"
            disabled={!tipoHabitacion} // Bloquear si no se selecciona Tipo de Habitación
            onFocus={handleAcomodacionFocus} // Mostrar modal si no hay Tipo de Habitación seleccionado
          >
            {tipoHabitacion === 'Estándar' && (
              <>
                <Option value="Sencilla">Sencilla</Option>
                <Option value="Doble">Doble</Option>
              </>
            )}
            {tipoHabitacion === 'Junior' && (
              <>
                <Option value="Triple">Triple</Option>
                <Option value="Cuádruple">Cuádruple</Option>
              </>
            )}
            {tipoHabitacion === 'Suite' && (
              <>
                <Option value="Sencilla">Sencilla</Option>
                <Option value="Doble">Doble</Option>
                <Option value="Triple">Triple</Option>
              </>
            )}
          </Select>
        </Form.Item>

        {/* Botón de envío */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar Tipo de Habitación
          </Button>
        </Form.Item>
      </Form>

      {/* Modal de Advertencia */}
      <Modal
        visible={modalVisible}
        title="Advertencia"
        centered
        onOk={() => setModalVisible(false)} // Cerrar modal al hacer clic en "OK"
        onCancel={() => setModalVisible(false)} // También cerrar al cancelar
        okText="Entendido"
      >
        <p>Por favor selecciona un tipo de habitación antes de elegir la acomodación.</p>
      </Modal>
    </div>
  );
};

export default TiposHabitacion;
