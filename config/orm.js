var connection = require("../config/connection.js");

// var orm = {
// selectAll: function(tableInput){
// var queryString = "SELECT * FROM ??";
// connection.query(queryString, [tableInput], function(err, result){
// console.log(result);
// });
// },
// insertOne: function(tableInput,colToInsert, valCol){
// var queryString = "INSERT INTO ?? SET ??=?"
// connection.query(queryString, [tableInput,colToInsert,valCol], function(err, result){
// console.log(result);
// });
// }/,
// updateOne: function(tableInput,colToUpdate,valCol, statusval){
// var queryString = "UPDATE ?? SET ?? WHERE ?"
// connection.query( queryString,[tableInput, colToUpdate,valCol, statusval], function(err, result){
// console.log(result)
// }/);
// }
// }

function printQuestionMarks(num) {
    var arr = [];

    for (var i = 0; i < num; i++) {
        arr.push("?");
    }

    return arr.toString();
}


function objToSql(ob) {
    var arr = [];

    for (var key in ob) {
        var value = ob[key];
        console.log(value);

        if (Object.hasOwnProperty.call(ob, key)) {

            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }


            arr.push(key + "=" + value);
        }
     }

     return arr.toString();
}

var orm = { //declaring our orms to be used laters
 	selectAll: function(tableInput ,cb){ //select All will be used to render all of the burgers on the index page.
 		//takes in two arguments tableInput and cb(call back) //table input will be "burgers" in this case
		var queryString = "SELECT * FROM" + tableInput + ";"; 
		connection.query(queryString, function(err, result){ //once connected to the database we will select every row in the database
			if(err){ // if error occurs 
				throw err; //notify error
			}
			cb(result); //else, return the result
		});
	},
	insertOne: function(tableInput,colToInsert, valCol, cb){ //inserting an entry
		//first arg: table to have new entry
		//second arg: the column where the new entry will be
		//third arg: the value given the column 
		//fourth arg: the callback once the query goes through
		var queryString = "INSERT INTO " + tableInput; //INSERT INTO the first argument specified table 

		queryString += " ("; 
		queryString += colToInsert.toString(); //attaching the second argument to query string, this will be an array of columns
		queryString += ") "; //
		queryString += "VALUES ("; //entering the values of the for the columns
		queryString += printQuestionMarks(valCol.length); //prints how many question marks needed for each value
		queryString += ") ";
	// var queryString = "INSERT INTO tableInput (colToInsert.toString()) VALUES printQuestionMarks(valCol.length))";
		console.log(queryString);
// connection.query("INSERT INTO tableInput ['burger_name','devoured'] VALUES ??",[req.body.name,req.body.devoured],function(err,result))
		connection.query(queryString, valCol, function(err, result){
			if(err){
				throw err;
			}
			cd(result);
		});
	},
	updateOne: function(tableInput, objColVals, valCol, cb){//update the data base with four arguments
		var queryString = "UPDATE " + table; // updating the table with UPDATE SET and WHERE commands

		queryString += " SET "; 
		queryString += objToSql(objColVals); //"SET key burger_name = 'Cheeseburger'"
		queryString += " WHERE "; //"WHERE"
		queryString =+ valCol; // the value is 'burger'
//queryString = "UPDATE table SET objToSql(objColVals) WHERE valCol"
		console.log(queryString);
		connection.query(queryString, function(err, result){
			if (err){
				throw err;
			}
			cb(result);
		});
	}
};


module.exports = orm;








module.exports = orm;

//selectAll()
//insertOne()
//updateOne()