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

exports.editprofile = async (email, name, phno) => {
    try{
        console.log(name);
        if(!name){
            return "Please enter name";
        }
       
        conn.query('UPDATE user SET name = ?  , phno = ? WHERE email = ?',[name,phno, email],async(error,results) => {
            if(error)   console.log(error);
            console.log(results);
            return "Update successful";
        })
    }catch(error){
        console.log(error);
    }
}
