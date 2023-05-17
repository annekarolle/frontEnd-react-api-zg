import axios from 'axios';

const operadoraService = {
  getOperadoras: async () => {
    try {
      const response = await axios.get('/api/operadoras/');
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  getContratosByOperadora: async (operadoraId) => {
    try {
      const response = await axios.get(`/api/operadoras/contratos/${operadoraId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  createOperadora: async (operadora) => {
    try {
      const response = await axios.post('/api/operadoras/', operadora);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
  deleteOperadora: async (operadoraId) => {
    try {
      const response = await axios.delete(`/api/operadoras/${operadoraId}`);
      return response.data;
    } catch (error) {
      throw error;
    }
  }
};

export default operadoraService;
