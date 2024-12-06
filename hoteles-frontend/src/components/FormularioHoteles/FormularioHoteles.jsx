import { useState } from "react";
import { Form, Input, InputNumber, Button, Modal } from "antd"; // Importar componentes de Ant Design
import { addHotel } from "../../services/HotelesService/HotelesService"; // Asegúrate de importar la función addHotel
import "./FormularioHoteles.css"; // Asegúrate de que el archivo CSS esté correctamente importado

const FormularioHoteles = () => {
  // Crear una instancia del formulario
  const [form] = Form.useForm();
  const [loading, setLoading] = useState(false); // Usar useState en lugar de React.useState

  // Función para manejar el envío del formulario
  const onFinish = async (values) => {
    setLoading(true);
    try {
      const hotelData = await addHotel(values);

      Modal.success({
        title: "¡Hotel Agregado Exitosamente!",
        content: `El hotel ${hotelData.nombre} ha sido registrado correctamente en el sistema.`,
        okText: "Entendido",
        centered: true,
      });

      form.resetFields(); // Limpiar el formulario
    } catch (error) {
      // Mostrar mensaje de error específico si existe, o un mensaje genérico si no
      Modal.error({
        title: "Error al Agregar Hotel",
        content:
          error.message ||
          "El hotel ya existe en el sistema.",
        okText: "Cerrar",
        centered: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h2 className="titulo-formulario">Agregar Hotel</h2>
      <p className="descripcion-formulario">
        En este módulo podrás registrar un nuevo hotel. Completa el formulario
        con la información solicitada, como el nombre, dirección, ciudad, número
        de habitaciones y el NIT del hotel. Una vez que envíes el formulario, tu
        hotel será agregado al sistema. ¡Comencemos a crear tu hotel!
      </p>

      <Form
        form={form} // Asociamos el formulario a la instancia de 'form'
        onFinish={onFinish} // Función que se ejecuta al enviar el formulario
        layout="vertical" // Establecer el diseño del formulario
        initialValues={{}} // Valores iniciales vacíos
      >
        {/* Campo para el nombre del hotel */}
        <Form.Item
          label="Nombre"
          name="nombre"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el nombre del hotel",
            },
          ]}
        >
          <Input placeholder="Nombre del hotel" />
        </Form.Item>

        {/* Campo para la ciudad del hotel */}
        <Form.Item
          label="Ciudad"
          name="ciudad"
          rules={[
            {
              required: true,
              message: "Por favor ingresa la ciudad del hotel",
            },
          ]}
        >
          <Input placeholder="Ciudad del hotel" />
        </Form.Item>

        {/* Campo para el número de habitaciones */}
        <Form.Item
          label="Número de Habitaciones"
          name="numero_habitaciones"
          rules={[
            {
              required: true,
              message: "Por favor ingresa el número de habitaciones",
            },
          ]}
        >
          <InputNumber
            min={1}
            placeholder="Número de habitaciones"
            style={{ width: "100%" }}
          />
        </Form.Item>

        {/* Campo para la dirección del hotel */}
        <Form.Item
          label="Dirección"
          name="direccion"
          rules={[
            {
              required: true,
              message: "Por favor ingresa la dirección del hotel",
            },
          ]}
        >
          <Input placeholder="Dirección del hotel" />
        </Form.Item>

        {/* Campo para el NIT del hotel */}
        <Form.Item
          label="NIT"
          name="nit"
          rules={[
            { required: true, message: "Por favor ingresa el NIT del hotel" },
          ]}
        >
          <Input placeholder="NIT del hotel" />
        </Form.Item>

        {/* Botón de enviar el formulario con loading */}
        <Form.Item>
          <Button type="primary" htmlType="submit" block loading={loading}>
            {loading ? "Agregando..." : "Agregar Hotel"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormularioHoteles;
