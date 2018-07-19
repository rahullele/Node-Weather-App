const request=require('request');

var getWeather=(lat,lng,callback)=>{
  request({
   url:`https://api.darksky.net/forecast/e744bdafa82e08ec88ffb0172c05d29b/${lat},${lng}`,
   json:true
 },(error,response,body)=>{
   if(!error && response.statusCode===200)
   callback(undefined, {
     temperature: body.currently.temperature,
     apparentTemperature: body.currently.apparentTemperature
   });
   else
   callback('Unable to fetch weather.');
 }
);
};

module.exports.getWeather=getWeather;
