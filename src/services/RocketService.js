import http from '../http-common';

const getAll = () => http.get('/');

const RocketService = {
  getAll,
};

export default RocketService;
