import axios from 'axios';
import genericService from './genericService';

const operadoraService = {
  ...genericService('operadoras'),
};

export default operadoraService;
