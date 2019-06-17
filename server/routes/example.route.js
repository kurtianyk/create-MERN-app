const express = require('express');

const router = express.Router();

const {
  addExample,
  getExample,
  updateExample,
  deleteExample,
} = require('../controllers/example.controller');

router.get('/', getExample);
router.post('/', addExample);
router.put('/:exampleId', updateExample);
router.delete('/:exampleId', deleteExample);

module.exports = router;
