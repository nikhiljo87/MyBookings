const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
const bookingRoutes = express.Router();
const PORT = 3000;
let bookingModel = require('./booking.model');
app.use(bodyParser.json());
mongoose.connect('mongodb://127.0.0.1:27017/bookingdb', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})
//setting up routes
console.log('asaas',bookingModel);
bookingRoutes.route("/getBookingList").get(function(req, res){
    bookingModel.find(function(err,booking){
        if(err){
            console.log(err);
        }else {
            res.json(booking);
        }
    })
});
bookingRoutes.route("/:id").get(function(req, res){
    let id = req.param.id;
    bookingModel.findById(id,function(err, booking) {
        if(err) {
            console.log(err);
        }else {
            res.json(booking)
        }
    })
});

bookingRoutes.route("/add").post(function(req, res){
    console.log(req.body);
    let newBookingItem = new bookingModel(req.body);
    console.log(newBookingItem);
    newBookingItem.save().then(newBookingItem => {
        res.status(200).json({'newBookingItem': 'newBookingItem added successfully'});
    })
    .catch(err => {
        res.status(400).send('adding new newBookingItem failed');
    });
});
app.use('/api', bookingRoutes);

app.listen(PORT, function() {
    console.log("My booking Server is running on Port: " + PORT);
});