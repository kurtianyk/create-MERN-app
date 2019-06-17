const express = require('express');
const exampleRoutes = require('./example.route');

const router = express.Router();

// mount example routes at /example
router.use('/example', exampleRoutes);

module.exports = router;
