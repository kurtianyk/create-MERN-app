import request from 'request-promise';

const SITE_URL = process.env.SITE_URL || document.location.origin;
const rp = request.defaults({
  baseUrl: SITE_URL,
  timeout: 10000,
  headers: {
    'Cache-Control': 'no-cache',
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  json: true,
});

const fetchExample = exampleId => rp.get(`/api/example/${exampleId}`);
const addExample = example => rp.post({ uri: '/api/example/', body: { example } });
const updateExample = (exampleId, example) => rp.put({ uri: `/api/example/${exampleId}`, body: { example } });
const deleteExample = exampleId => rp.delete(`/api/example/${exampleId}`);

export default {
  fetchExample,
  addExample,
  updateExample,
  deleteExample,
};
