const checkAdmin=(req,res,next)=>{
    if(req.body.role==="admin"){
        next()
    }else{
        res.send('you are not authorized to update the data')
    }
}

module.exports=checkAdmin