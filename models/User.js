/**
 * Created by xue on 2017/4/14.
 */
var mongoose=require('mongoose');
var usersSchema=require('../schemas/users');
module.exports=mongoose.model('User',usersSchema);