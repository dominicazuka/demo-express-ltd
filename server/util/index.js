const bcrypt = require("bcryptjs");

//function to generate hash
const generateHash = (str) => {
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(str, salt);
    return hash;
  };

  module.exports = {generateHash};