const express =  require('express')
const app =  express()
const port = process.env.PORT || 8000
require('./db');
app.use(express.json())
app.use(express.urlencoded({extended: true}));

//console.log(process.env.MONGO_URL);
app.use('/users',require('./routes/users'))
app.use('/interviews', require('./routes/interview'))
app.listen(port,() => {
    console.log("app is running on port 8000");
})