import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var User= new Schema({
    ID:Number,
	name: String,
    password: String,
    email:String,
    tel:String
});
var Users = mongoose.model('users', User);

module.exports = Users;
