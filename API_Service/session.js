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
//add session
exports.addSession = async ( client_email) =>{
    // to be taken as input moving forward
    var date = new Date();
    var app_time = date.toISOString().slice(0, 19).replace('T', ' ');
    conn.query ("INSERT INTO session SET ?",{
        email: client_email,
        app_time: app_time,
    },(error,results)=>{
        if(error){
            console.log('error');
            return "error";
        }else{
            console.log(results);
            return "Session added."       
        }
    });
}
//get all sessions for a client
//get session details
