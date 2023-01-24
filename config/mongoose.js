const mongoose = require('mongoose');
mongoose.connect('mongodb://0.0.0.0/todo_list_app');
const db = mongoose.connection;

db.on('error',function(err){
    if(err){
        console.log(err.message);
    }
});

db.once('open',function(){
    console.log('connection successfull');
})