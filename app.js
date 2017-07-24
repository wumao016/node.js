/**
 * Created by xue on 2017/4/5.
 * 应用程序的启动（入口）文件
 */
var express=require('express');
var swig=require('swig');
var mongoose=require('mongoose');
//加载数据库模块
var bodyParser=require('body-parser');
//加载body-parser,用来处理post提交过来的数据
var Cookies=require('cookies');
//加载cookies模块
var app=express();
//创建app应用=》nodejs http。createserver（）；
var User=require('./models/User');


app.use('/public',express.static(__dirname+'/public'));
app.engine('html', swig.renderFile);
app.set('views','./views');
app.set('view engine','html');
swig.setDefaults({cache:false});
app.use(bodyParser.urlencoded({extended:true}));
//设置cookies
app.use(function(req,res,next){
   req.cookies=new Cookies(req,res);
    //解析登录用户的cookie信息
    req.userInfo={};
    if(req.cookies.get('userInfo')){
        try{
            req.userInfo=JSON.parse(req.cookies.get('userInfo'));
            //获取当前登录用户的类型，是否是管理
            User.findById(req.userInfo._id).then(function(userInfo){
                req.userInfo.isAdmin=Boolean(userInfo.isAdmin);
                next();
            })
        }catch(e){
            next();
        }

    }else{
        next();
    }

});


app.use('/admin',require('./routers/admin'));
app.use('/api',require('./routers/api'));
app.use('/',require('./routers/main'));

mongoose.connect('mongodb://localhost:27018/blog',function(err){
    if(err){
        console.log("数据库连接失败");
    }else{
        console.log("数据库连接成功");
        app.listen(8081);
    }
});

