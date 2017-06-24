
/**
 * Created by xue on 2017/4/14.
 */
var mongoose=require('mongoose');
var contentsSchema=require('../schemas/contents');
module.exports=mongoose.model('Content',contentsSchema);