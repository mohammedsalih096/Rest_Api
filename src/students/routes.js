const { Router} = require('express');
const controllers =  require('./controllers')

const router = Router();

router.get('/', controllers.getStudents);
router.post('/',controllers.addStudents)
router.put('/:id', controllers.updateStudent);
router.get('/:id', controllers.getStudentById);
router.delete('/:id', controllers.deleteStudentById);

module.exports = router;