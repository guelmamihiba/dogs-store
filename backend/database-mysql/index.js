
const mysql = require("mysql2");
const mysqlConfig = require("./config.js");

const connection = mysql.createConnection(mysqlConfig);
connection.connect((err) => {
  if (err) {
    console.error(err);
  } else {
    console.log("db connected!!");
  }
});

const getAllAccessorie = (callback) => {
  const query = "SELECT * FROM `pet shop`"; // Adjust the query based on your database schema
  connection.query(query, (err, results) => {
    if (err) {
      console.error('Error executing query:', err);
      callback(err, null);
    } else {
      console.log('accessories retrieved successfully:', results);
      callback(null, results);
    }
  });
};

const addAccessorie = (productData, callback) => {
  const query = "INSERT INTO `pet shop` SET ?";
  connection.query(query, productData, (err, results) => {
    if (err) {
      console.error('Error adding accessorie:', err);
      callback(err, null);
    } else {
      console.log('added accessorie successfully:', results);
      callback(null, results);
    }
  });
};

const updateAccessorie = (productId, updatedProductData, callback) => {
  const query = "UPDATE `pet shop` SET ? WHERE id = ?";
  
  connection.query(query, [updatedProductData, productId], (err, results) => {
    if (err) {
      console.error('Error updating accessorie:', err);
      callback(err, null);
    } else {
      console.log('accessorie updated successfully:', results);
      callback(null, results);
    }
  });
};

const deleteAccessorie = (productId, callback) => {
  const query = "DELETE FROM `pet shop` WHERE id = ?";
  
  connection.query(query, [productId], (err, results) => {
    if (err) {
      console.error('Error deleting accessorie:', err);
      callback(err, null);
    } else {
      console.log('accessorie deleted successfully:', results);
      callback(null, results);
    }
  });
};

module.exports = {
  getAllAccessorie,
  addAccessorie,
  updateAccessorie,
  deleteAccessorie
}