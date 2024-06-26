const { Schema, model } = require('../config/db-connection');

const userSchema = Schema({
  class_id: {
    type: Number,
    required: true,
  },
  learner_id: {
    type: Number,
    required: true,
  },
  scores: [{
    type: {
      type: String,
    required: true,
  },
  score : {
    type: Number,
    required: true,
  }
  }],
});

module.exports = model('User', userSchema);
