var orm = require("../config/orm.js");
// Creating the "burger" object
var burger = {
    selectAll: function(cb) {
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        console.log(cols);
        console.log(vals);
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(objColVals, conditions, cb) {
        orm.updateOne("burgers", objColVals, conditions, function(res){
            cb(res);
        });
    }

};


module.exports = burger;