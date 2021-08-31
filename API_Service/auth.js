const bcrypt = require('bcryptjs');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');

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


exports.login = async (email, password) => {
    try{
        if( !email || !password){
            return "Provide email and password";
        }
        
        conn.query('SELECT * from user WHERE email = ?',[email],async(error,results) => {
            // console.log(results);
            if(results.length === 0){
                return "Incorrect email";
            }
            else if(results.length !== 0){
                console.log(results[0])
                if(!( bcrypt.compareSync(password,results[0].password))){
                    return  "Incorrect password" 
                }else{
                    return "Login successful";
                }
            }
        })
    }catch(error){
        console.log(error);
    }
}



exports.register = async (email,name,phno,password,passwordConfirm) => {


    function checkEMail(){
        conn.query('SELECT email from user WHERE email = ?',[email],(error,results) => {
            if(results.length > 0){
                return "duplicate email";
            }
        });
    };
   

    async function registerUser (){
         var hashedPassword = await bcrypt.hashSync(password, 8);
         return hashedPassword;
    }

    if(password !== passwordConfirm){
        return "Passwords do not match"
    }else{
        checkEMail();      
        var hashedpass = await registerUser();
        conn.query('INSERT INTO user SET ?',{
            name: name,
            email: email,
            avatar:'',
            phno: phno,
            password: hashedpass
        },(error,results)=>{
            if(error){
                console.log('error');
            }else{
                console.log(results);
                return 'User registered';
               
            }
        })
    }
}
