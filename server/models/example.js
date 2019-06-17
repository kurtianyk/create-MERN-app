const mongoose = require('mongoose');

const { Schema } = mongoose;

const ExampleModelName = 'Example';

const ExampleSchema = new Schema({
  somedata1: { type: String, required: true },
  somedata2: { type: String, required: true },
});

const Example = mongoose.model(ExampleModelName, ExampleSchema);

module.exports = Example;
