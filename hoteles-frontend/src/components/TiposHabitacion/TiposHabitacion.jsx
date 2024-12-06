import  { useState, useEffect } from 'react';
import { Form, Input, Select, Button, message } from 'antd';
import { getHoteles } from '../../services/HotelesService/HotelesService'; // Servicio para obtener hoteles
import { addTipoHabitacion } from '../../services/TiposHabitacionService/TipoHabitacionService'; // Servicio para agregar tipo de habitación

const { Option } = Select;

const TiposHabitacion = () => {
  const [hoteles, setHoteles] = useState([]); // Lista de hoteles

  // Obtener los hoteles al cargar el componente
  useEffect(() => {
    const fetchHoteles = async () => {
      try {
        const data = await getHoteles();
        setHoteles(data);
      } catch (error) {
        console.error('Error al obtener los hoteles:', error);
        message.error('Error al cargar los hoteles.');
      }
    };

    fetchHoteles();
  }, []);

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
      message.success('Tipo de habitación agregado exitosamente.');
    } catch (error) {
      console.error('Error al agregar el tipo de habitación:', error);
      message.error('Hubo un error al agregar el tipo de habitación.');
    }
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
          <Select placeholder="Selecciona un hotel">
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
          min={1}
          label="Cantidad"
          rules={[
            { required: true, message: 'Por favor ingresa la cantidad.' },
          ]}
        >
          <Input type="number" placeholder="Cantidad" />
        </Form.Item>

        {/* Tipo de Habitación */}
        <Form.Item
          name="tipo_habitacion"
          label="Tipo de Habitación"
          rules={[{ required: true, message: 'Por favor selecciona un tipo de habitación.' }]}
        >
          <Select placeholder="Selecciona un tipo">
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
          <Select placeholder="Selecciona una acomodación">
            <Option value="Sencilla">Sencilla</Option>
            <Option value="Doble">Doble</Option>
            <Option value="Triple">Triple</Option>
            <Option value="Cuádruple">Cuádruple</Option>
          </Select>
        </Form.Item>

        {/* Botón de envío */}
        <Form.Item>
          <Button type="primary" htmlType="submit">
            Agregar Tipo de Habitación
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default TiposHabitacion;
