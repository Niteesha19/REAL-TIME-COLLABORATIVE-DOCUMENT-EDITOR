const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  _id: String,
  data: String,
});

module.exports = mongoose.model('Document', DocumentSchema);
