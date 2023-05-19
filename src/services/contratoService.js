import axios from 'axios';
import genericService from './genericService';

const contratoService = {
  ...genericService('contratos'),
};

export default contratoService;
