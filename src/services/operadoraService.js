import axios from 'axios';
import genericService from './genericService';

const operadoraService = {
  ...genericService('operadoras'),
  getContratosByOperadora: async (operadoraId) => {
    try {
      const response = await axios.get(`/api/operadoras/contratos/${operadoraId}/`);
      return response.data;
    } catch (error) {
      throw error;
    }
  },
};

export default operadoraService;
