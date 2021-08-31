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

exports.editprofile = async (req,res) => {
    try{
        const email = req.body.email;
        const name = req.body.name;
        const avatar = req.body.avatar;
        const phno = req.body.phno;
        
        console.log(name);
        if(!name){
            return "Please enter name";
        }
       
        conn.query('UPDATE user SET name = ? , avatar =  ?  , phno = ? WHERE email = ?',[name,avatar,phno, email],async(error,results) => {
            if(error)   console.log(error);
            console.log(results);
            return "Update successful";
        })
    }catch(error){
        console.log(error);
    }
}

exports.login = async (req,res) => {
    try{
        
        const email = req.body.email;
        const password = req.body.password;
        //console.log(username, password);
        if( !email || !password){
            return res.status(400).render('login',{
                message: 'Please provide email and password'
            })
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
                const email = results[0].email;
                const token = jwt.sign({username: email},process.env.JWT_SECRET,{
                    expiresIn: process.env.JWT_EXPIRES_IN
                });

                // console.log("token"+token);
                const cookieOptions = {
                    expires: new Date(
                        Date.now() + process.env.JWT_COOKIE_EXPIRES * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true
                }

                res.cookie('jwt',token,cookieOptions);
            
                return "Login successful";
            }
            }
        })
    }catch(error){
        console.log(error);
    }
}

exports.isLoggedIn = (req, res, next) => {
    // Check if the user has token in cookies. If not return the request;
    if(!req.cookies.jwt) return res.json({ error: 'Please Login' });

    const clientToken = req.cookies.jwt;

    try {
    //  Decode the client token by using same secret key that we used to sign the token
        const decoded = jwt.verify(clientToken, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    }
    catch(err){
        return res.json({error: 'Invalid Token'})
    }

}

exports.register = async (req,res) => {
    console.log(req.body);

    const email = req.body.email;
    const name = req.body.name;
    const avatar = req.body.avatar;
    const phno = req.body.phno;
    const password = req.body.password;
    const passwordConfirm = req.body.passwordConfirm;

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
        return res.render('register',{
            message: 'Passwords do not match'
        })
    }else{
        checkEMail();      
        var hashedpass = await registerUser();
        conn.query('INSERT INTO user SET ?',{
            name: name,
            email: email,
            avatar: avatar,
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
