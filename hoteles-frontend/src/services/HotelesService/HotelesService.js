import axios from "axios";

/**
 * Clase HotelesService para centralizar las interacciones con la API relacionada con los hoteles.
 * Aplica el principio de Responsabilidad Única (SRP) y el Patrón Fachada.
 */
class HotelesService {
  // Instancia de axios con configuración base
  constructor(baseURL = import.meta.env.VITE_API_URL) {
    this.api = axios.create({
      baseURL, // URL base definida en las variables de entorno
      headers: {
        "Content-Type": "application/json", // Establece que las solicitudes son de tipo JSON
      },
    });
  }

  /**
   * Realiza una solicitud GET para obtener todos los hoteles.
   *
   * @returns {Promise<Object[]>} Lista de hoteles.
   */
  async getHoteles() {
    try {
      const response = await this.api.get("/hoteles"); // Llamada GET para obtener hoteles
      return response.data; // Devuelve los datos de la respuesta
    } catch (error) {
      // Manejo de errores
      console.error("Error al obtener los hoteles:", error);
      throw error; // Re-lanzar el error para ser manejado en otro lugar
    }
  }

  /**
   * Realiza una solicitud POST para agregar un nuevo hotel.
   *
   * @param {Object} hotelData Los datos del nuevo hotel.
   * @returns {Promise<Object>} El hotel creado.
   */
  async addHotel(hotelData) {
    try {
      const response = await this.api.post("/hoteles", hotelData);
      return response.data;
    } catch (error) {
      if (error.response && error.response.data) {
        throw new Error(error.response.data.error); // Propagar el mensaje de error del backend
      }
      throw error; // Lanzar otros errores no específicos
    }
  }
}

// Instanciamos la clase HotelesService
const hotelesService = new HotelesService();

/**
 * Exportar las funciones de API para que puedan ser utilizadas en otros componentes o servicios.
 * Al hacer esto, seguimos el principio de "Abierto/Cerrado" (OCP), pues podemos agregar más funciones sin modificar las existentes.
 */
export const getHoteles = () => hotelesService.getHoteles();
export const addHotel = (hotelData) => hotelesService.addHotel(hotelData);
