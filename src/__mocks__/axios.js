export default {
  get: jest.fn().mockResolvedValue({ data: {} }),
  create: jest.fn().mockResolvedValue({ baseURL: 'https://api.spacexdata.com/v3', headers: { 'Content-type': 'application/json' } }),
};
