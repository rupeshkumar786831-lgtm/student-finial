const students = require('../students.json');

module.exports = (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  const { roll_no } = req.query;
  
  if (!roll_no) {
    return res.status(400).json({ 
      success: false, 
      message: "Please provide roll_no parameter. Example: ?roll_no=1" 
    });
  }
  
  const student = students.find(s => s.roll_no === parseInt(roll_no));
  
  if (student) {
    return res.status(200).json({ success: true, data: student });
  }
  
  return res.status(404).json({ 
    success: false, 
    message: "Student not found" 
  });
};
