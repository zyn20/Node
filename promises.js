// //syntax
// const whereismycofee = function(orderid)
// {
//     return new Promise ((resolve,reject) =>{
//       Cofee.checkApi(orderid, (error,coffestarus) =>
//       {
//         if(error)
//         {
//             console.log("Error");
//         }
//         else{
//             return coffestarus;
//         }
//       })
//     })
// }
const { default: axios } = require('axios');
//working with axious client library Axios is a promise based HTTP client for the browser and Node.js
//Api
//https://www.boredapi.com/api/activity

const axiosrequest = require('axios')
axiosrequest.get('https://httpstat.us/402')
.then(response =>{
    console.log(`you could ${response.data.activity}` )
})
.catch(error =>{
    console.log(`Error ${error}` )
})