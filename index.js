/* 
----------------------------------
    Enviornment Setup
----------------------------------
 1. npm init    
 2. npm i express --save
    - push enter for everything
    - answer yes
 3. npm i mongoose --save
 4. npm i dotenv
 5. create config directory in root
    - in the config directory create keys.env file
    - keys.env will be used to store all envirnment varibles (connection strings, usernames, passwords, PORT, etc... )
 6. npm i express-handlebars
 7. npm i express-session --save
 8. npm i npm i socket.io
 9. npm install supertest --save-dev
 10. npm install --save-dev jest
 11. npm install --save @sendgrid/mail
*/
const server = require('./app');

const mongoose =require('mongoose'); 

//Connect to Database
mongoose.connect(process.env.MONGO_DB_CONNECT)
.then(()=>{
    console.log('Connected to MongoDB')
})

.catch(err=> console.log(`Could not connect to MongoDB: ${err}`));
  server.listen(process.env.PORT, () => {
    console.log(`Example app listening at http://localhost:${process.env.PORT}`);
  });
  