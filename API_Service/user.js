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

exports.getUserProfile = async (email)=>{
    var sql = `SELECT 
    email, name, phno,avatar
    FROM user 
    WHERE email=${"'"+email+"'"}`;
    conn.query(sql,function (error,results,fields){
        if(error){
            console.log('error: '+error);
        }
        return results;
    });
}
