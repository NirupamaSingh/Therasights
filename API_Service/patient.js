const mysql = require('mysql');
const dotenv  = require('dotenv');

dotenv.config({ path:'./.env' });

var config =
{
	host: process.env.HOST,
	user: process.env.USER,
	password: process.env.PASSWORD,
	database: process.env.DATABASE,
	port: 3306,
	ssl: true
};

const conn = new mysql.createConnection(config);

exports.getAllPatients = async (user_email) =>{
    var sql = `SELECT 
    consults.client_email, name, phno 
    FROM client NATURAL JOIN consults 
    WHERE consults.user_email=${"'"+user_email+"'"}`;
    conn.query(sql,function (error,results,fields){
        if(error){
            console.log('error: '+error);
        }
        return results;
    });
}

exports.getPateint = async (client_email) =>{
    var sql = `SELECT 
    email, name, phno 
    FROM client 
    WHERE email=${"'"+client_email+"'"}`;
    conn.query(sql,function (error,results,fields){
        if(error){
            console.log('error: '+error);
        }
        return results;
    });
}