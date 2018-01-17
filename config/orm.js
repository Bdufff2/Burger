var connection = require("connection.js");

// ====================================================================

// Helper function for SQL syntax.
// Let's say we want to pass 3 values into the mySQL query.
// In order to write the query, we need 3 question marks.
// The above helper function loops through and creates an array of question marks - ["?", "?", "?"] - and turns it into a string.
// ["?", "?", "?"].toString() => "?,?,?";
function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function objToSql(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }

// ====================================================================
// create orm connections
var orm = {
    
    
    // Display table info function
    selectAll: function(table, cb) {
        // SQL SELECT all statement: "SELECT * FROM table;"
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, function(err, results) {
            if (err) {
                throw err;
            } else {
                cb(results);
            }
        });
    },
    // Insert into table function
    insertOne: function(table,cb){
        
    },
    // Update line-item function
    updateOne: function(table, objColVals, conditions, cb) {
        // SQL UPDATE function: "UPDATE table SET objColVals WHERE conditions"
        var queryString = "UPDATE " + table;
            queryString += " SET ";
            queryString += objToSql(objColVals);
            queryString += " WHERE ";
            queryString += conditions;

        connection.query(queryString, function(err, results){
            if (err) {
                throw err;
            } else {
                cb(results);
            }
        });
    }
};

// Export the orm object for the model
module.exports = orm;
