//syntax
const whereismycofee = function(orderid)
{
    return new Promise ((resolve,reject) =>{
      Cofee.checkApi(orderid, (error,coffestarus) =>
      {
        if(error)
        {
            console.log("Error");
        }
        else{
            return coffestarus;
        }
      })
    })
}