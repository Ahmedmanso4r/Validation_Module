const validate = require('./validator');

const isValid = validate('ahmed', 'ahmed@icloud.com', 'password1907', 21, 'male');
console.log(isValid);