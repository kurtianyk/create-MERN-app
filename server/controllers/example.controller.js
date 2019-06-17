const { Example } = require('../models');

async function addExample(req, res) {
  try {
    const { example } = req.body;

    const createdExample = await Example.create(example);

    return res.status(200).send(createdExample);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}

async function getExample(req, res) {
  try {
    const examples = await Example.find();

    return res.status(200).send(examples);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}

async function updateExample(req, res) {
  try {
    const { exampleId } = req.params;
    const { example } = req.body;

    const updatedExample = await Example.findOneAndUpdate({ _id: exampleId }, example, { new: true });

    return res.status(200).send(updatedExample);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}

async function deleteExample(req, res) {
  try {
    const { exampleId } = req.params;

    const removedExample = await Example.findOneAndRemove({ _id: exampleId });

    return res.status(200).send(removedExample);
  } catch (err) {
    console.error(err);
    return res.status(500).send(err);
  }
}

module.exports = {
  getExample,
  addExample,
  updateExample,
  deleteExample,
};
