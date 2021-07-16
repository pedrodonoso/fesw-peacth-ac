import { api } from '../helpers/api';

const basePath = '/patients/get_weekly_dosis/get_weekly_dosis/';

function createPatient() {return api.post(`${basePath}/`, data); }

const calculoService = {createPatient};

export default calculoService;