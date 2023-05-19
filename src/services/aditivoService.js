import axios from 'axios';
import genericService from './genericService';

const aditivoService = {
  ...genericService('aditivos'),
};

export default aditivoService;
