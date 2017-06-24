/**
 * Created by xue on 2017/4/5.
 */
var mongoose=require('mongoose');

//用户的表结构
module.exports=new mongoose.Schema({

    username:String,
    password:String,
    //是否是管理员
    isAdmin:{
        type:Boolean,
        default:false
    }

})