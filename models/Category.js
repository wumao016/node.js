
/**
 * Created by xue on 2017/4/14.
 */
var mongoose=require('mongoose');
var categoriesSchema=require('../schemas/categories');
module.exports=mongoose.model('Category',categoriesSchema);