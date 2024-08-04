const jwt = require('jsonwebtoken');

const auth=(req,res,next)=>{
    const token=req.query.token;
    
    jwt.verify(token,"dwi",function(err,decoded){
        if(err){
            res.json({message:`unauthorized or login first ${err}`})
        }
        if(decoded){
            req.body.name=decoded.name
            req.body.role=decoded.role 
            next()
            
        }
    })
}

module.exports=auth;