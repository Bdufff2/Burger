var orm = require("../config/orm.js");

var burger = {
    create: function(table, cols, vals, cb){
        orm.create("burgers", function(res) {
            cb(res);
        });
    },
    read: function(table, cb){
        orm.read("burgers", function(res) {
            cb(res);
        });
    },
    update: function(table, objColVals, conditions, cb){
        orm.update("burgers", function(res) {
            cb(res);
        });
    },
    delete: function(table, conditions, cb){
        orm.delete("burgers", function(res) {
            cb(res);
        });
    }
};


module.exports = burger;