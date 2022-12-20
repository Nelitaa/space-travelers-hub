import http from '../http-common';

const getAll = () => http.get('/rockets');

const RocketService = {
  getAll,
};

export default RocketService;
