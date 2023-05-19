import axios from 'axios';

const genericService = (resource) => {
  return {
    getAll: async () => {
      try {
        const response = await axios.get(`/api/${resource}/`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    get: async (itemId) => {
      try {
        const response = await axios.get(`/api/${resource}/${itemId}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    create: async (item) => {
      try {
        const response = await axios.post(`/api/${resource}/`, item);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    delete: async (itemId) => {
      try {
        const response = await axios.delete(`/api/${resource}/${itemId}`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
    getAllByOperadora: async (operadoraId) => {
      try {
        const response = await axios.get(`/api/operadoras/${resource}/${operadoraId}/`);
        return response.data;
      } catch (error) {
        throw error;
      }
    },
  };
};

export default genericService;
