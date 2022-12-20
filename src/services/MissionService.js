import http from '../http-common';

const getAll = () => http.get('/missions');

const MissionService = {
  getAll,
};

export default MissionService;
