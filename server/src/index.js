const express = require('express');
const route = require('./routes/route');
const mongoose  = require('mongoose');
const cors = require('cors')
const app = express()
 
app.use(cors())

app.use(express.json());

mongoose.connect("mongodb+srv://aparna21:tpzmDVkZSc3mpMTf@cluster21.u69lmjr.mongodb.net/Blog_App", {
    useNewUrlParser: true
})
.then( () => console.log("MongoDb is connected"))
.catch ( err => console.log(err) )

app.use('/', route);


app.listen(5000, function () {
    console.log('Express app running on port ' + (5000))
});