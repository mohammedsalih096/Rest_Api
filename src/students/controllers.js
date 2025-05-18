const pool = require("../db.js");
const queries = require("./queries.js");

const getStudents = (req, res) => {
  pool.query(queries.getStudents, (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const getStudentById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getStudentById, [id], (err, result) => {
    if (err) throw err;
    res.status(200).json(result.rows);
  });
};

const addStudents = (req, res) => {
  const { name, email, age, dob } = req.body;
  pool.query(queries.checkEmailExists, [email], (err, result) => {
    // check if email exists
    if (result.rows.length) {
      res.send("EMAIL ALREADY EXISTS");
    }
    // add students to db
    pool.query(queries.addStudents, [name, email, age, dob], (err, result) => {
      if (err) throw err;
      res.status(201).send("student added successfully");
    });
  });
};

const updateStudent = (req, res) =>{
    const id = parseInt(req.params.id);
    const { name } =req.body;

    pool.query(queries.getStudentById, [id], (err, result) => {
        const student = result.rows[0];
        if(!student){
            res.send("student does not exist in the database");
        }
        pool.query(queries.updateStudent, [name, id], (err, result) => {
            if (err) throw err;
            res.status(200).send("student updated successfully");
        });
    })                                                                                                          
}

const deleteStudentById = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.removeStudent, [id], (err, result) => {
    if (err) throw err;

    if (result.rowCount === 0) {
      return res.send("Student does not exist in the database.");
    }

    res.status(200).send("Student deleted successfully");
  });
};


module.exports = {
  getStudents,
  getStudentById,
  addStudents,
  updateStudent,
  deleteStudentById,
};
