const getStudents = "SELECT * FROM students";
const getStudentById = "SELECT * FROM students WHERE id = $1";
const checkEmailExists = "SELECT * FROM students WHERE email = $1";
const addStudents =
  "INSERT INTO students (name, email, age, dob) VALUES ($1, $2, $3, $4)";
const removeStudent = "DELETE FROM students WHERE id = $1";
const updateStudent = "UPDATE students SET name = $1 WHERE id = $2";
module.exports = {
  getStudents,
  getStudentById,
  checkEmailExists,
  addStudents,
  removeStudent,
  updateStudent
};
