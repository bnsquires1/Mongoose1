const User = require('../models/User');

module.exports = {
  getOneGrade,
  addGradeScore,
  deleteGradeScore,
  deleteByLearnerId,
};


//get a single grade entry
async function getOneGrade(req, res) {
  try {
    const grade = await Grade.findById(req.params.id);

    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json('No Bueno:(');
  }
}

//add a score to a grade entry
async function addGradeScore(req, res) {
  try {
    const grade = await Grade.findById(req.params.id);
    grade.scores.push(req.body);
    grade.save();

    res.status(200).json(grade);
  } catch (err) {
    res.status(400).send(err);
  }
}

//delete a single grade entry
async function deleteGradeScore(req, res) {
  try {
    const grade = await Grade.findByIdAndDelete(req.params.id);
    

    res.status(200).json(deleteGradeScore);
  } catch (err) {
    res.status(400).send(err);
  }
}

//get route for backwards compatibility
async function getOneGrade(req, res) {
  try {
    const grade = await Grade.findById(req.params.id);
    const newDocument = req.body;

    if (newDocument.student_id) {
      newDocument.learner_id = newDocument.student_id;
      delete newDocument.student_id;
    }

    res.status(200).json(grade);
  } catch (err) {
    res.status(400).json('No Bueno:(');
  }
}

//get a learner's grade data

//delete one grade by learner ID
async function deleteByLearnerId(req, res) {
  try {
    const grade = await grade.findByIdAndDelete(req.params.id)

    res.status(200).json(deletedgrade);
  } catch (err) {
    res.status(400).send(err)
  }
};
//

