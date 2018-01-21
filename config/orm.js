// Import database connection
var connection = require("../config/connection.js");

// SQL syntax functions
// ====================================================================

// Helper function for generating SQL syntax
function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}

// Convert object key/value pairs to SQL syntax
function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        if (Object.hasOwnProperty.call(ob, key)) {
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }
            arr.push(key + "=" + value);
        }
    }
    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// ====================================================================
// create orm connections
var orm = {


    // Function that displays all table data
    selectAll: function (tableInput, cb) {
        // SQL SELECT all statement: "SELECT * FROM table;"
        var queryString = "SELECT * FROM " + tableInput + ";";
        // Database query
        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            } else {
                cb(results);
            }
        });
    },
    // Insert into table function
    insertOne: function (table, cols, vals, cb) {
        var queryString = "INSERT INTO " + table;
        // "INSERT INTO " + table + " (" + cols.toString() + ") " + "VALUES (" + printQuestionMarks(vals.length) + ") "
        queryString += " (";
        queryString += cols.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(vals.length);
        queryString += ") ";
    
        console.log(queryString);
    
        connection.query(queryString, vals, function(err, result) {
          if (err) {
              console.log(this.sql);
            throw err;
          }
    
          cb(result);
        });
    },
    // Update line-item function
    updateOne: function (table, objColVals, conditions, cb) {
        // SQL UPDATE function: "UPDATE table SET objColVals WHERE conditions"
        var queryString = "UPDATE " + table + " SET " + objToSql(objColVals) + " WHERE " + conditions + ";";

        connection.query(queryString, function (err, results) {
            if (err) {
                throw err;
            } else {
                cb(results);
            }
        });
    }
};

// Export the orm object for the model file
module.exports = orm;
