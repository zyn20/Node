const auth  = (req,res,next)=>
{
    console.log('Authorization has been called');
    const {user} = req.query;
    if(user ==='zain')
    {
        req.user = {name:'zain',id:1}
        console.log(req.user)
        next()
    }
    else
    {
        res.status(401).send('Unauthrize person')
    }

}

module.exports = auth