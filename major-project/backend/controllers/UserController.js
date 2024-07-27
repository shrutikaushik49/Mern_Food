const getUser =(req,res)=>{
    console.log(req.body)
    res.send('Hello World!')
}
module.exports= {getUser};
