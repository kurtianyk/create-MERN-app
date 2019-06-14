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

const addExample = example => rp.post({ uri: '/example/', body: { example } });
const fetchExample = exampleId => rp.get(`/example/${exampleId}`);
const updateExample = (exampleId, example) => rp.put({ uri: `/example/${exampleId}`, body: { example } });
const deleteExample = exampleId => rp.delete(`/example/${exampleId}`);

export default {
  addExample,
  fetchExample,
  updateExample,
  deleteExample,
};
