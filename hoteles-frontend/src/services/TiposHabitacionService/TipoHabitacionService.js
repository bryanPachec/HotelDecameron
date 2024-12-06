import axios from 'axios';

/**
 * Clase TipoHabitacionesService para centralizar las interacciones con la API relacionada con los tipos de habitaciones.
 */
class TipoHabitacionesService {
  // Instancia de axios con configuración base
  constructor(baseURL = import.meta.env.VITE_API_URL) {
    this.api = axios.create({
      baseURL, // URL base definida en las variables de entorno
      headers: {
        'Content-Type': 'application/json', // Establece que las solicitudes son de tipo JSON
      },
    });
  }

  /**
   * Realiza una solicitud GET para obtener los tipos de habitaciones.
   * 
   * @returns {Promise<Object[]>} Lista de tipos de habitaciones.
   */
  async getTiposHabitaciones() {
    try {
      const response = await this.api.get('/tipos-habitaciones');
      return response.data;
    } catch (error) {
      console.error('Error al obtener los tipos de habitaciones:', error);
      throw error;
    }
  }

  /**
   * Realiza una solicitud POST para agregar un nuevo tipo de habitación.
   * 
   * @param {Object} tipoHabitacionData Los datos del nuevo tipo de habitación.
   * @returns {Promise<Object>} El tipo de habitación creado.
   */
  async addTipoHabitacion(tipoHabitacionData) {
    try {
      const response = await this.api.post('/tipos-habitaciones', tipoHabitacionData);
      return response.data;
    } catch (error) {
      console.error('Error al agregar el tipo de habitación:', error);
      throw error;
    }
  }
}

// Instancia de la clase TipoHabitacionesService
const tipoHabitacionesService = new TipoHabitacionesService();

/**
 * Exportar las funciones de API para que puedan ser utilizadas en otros componentes o servicios.
 */
export const getTiposHabitaciones = () => tipoHabitacionesService.getTiposHabitaciones();
export const addTipoHabitacion = (tipoHabitacionData) => tipoHabitacionesService.addTipoHabitacion(tipoHabitacionData);
