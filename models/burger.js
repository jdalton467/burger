var orm = require("../config/orm.js");

var burger = {
selectAll: function(cb){
orm.selectAll("burgers", function(res){
	cb(res);
  });
},
insertOne: function(colToInsert, valCol, cb){
orm.insertOne("burgers", cols, vals,function(res){
	cb(res);
  });
},
updateOne: function(colToUpdate,valCol,statusval, cb){
orm.updateOne("burger", objColVals, valCol , function(res){
	cb(res);
});
	}
}

module.exports = orm;
