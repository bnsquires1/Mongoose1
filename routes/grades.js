const { Router } = require('express');
const gradesCtrl = require('../controllers/grades.js');

const router = Router();

// Post a single grade entry
router.post('/', usersCtrl.createGrade);

// Get a single grade entry 
router.get('/:id', gradesCtrl.getOneGrade);

//Delete a single grade entry
router.delete('/:id',gradesCtrl.deleteGrade);

// Get route for backwards compatibility
router.get('/student/:id',gradesCtrl.getGradesByLearner);

// Get a learner's grade data
router.get('/learner/:id',gradesCtrl.getGradesByLearner);

// Delete a learner's grade by id
router.delete('/learner/:id',deleteByLearner);





module.exports = router;