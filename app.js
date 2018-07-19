const yargs=require('yargs');
const geocode=require('./geocode/geocode');
const weather=require('./weather/weather');
const argv=yargs
          .options({
            a:{
              demand:true, //required
              alias:'address',
              describe:'Address to fetch for',
              string:true  //address should be a string
             }
           })
             .help()
             .alias('help','h')
             .argv;



geocode.geocodeAddress(argv.address,(errorMessage, results)=>{
  if(errorMessage){
    console.log(errorMessage);
  }else{
    console.log(results.address);

    weather.getWeather(results.latitude,results.longitude,(errorMessage, weatherResults)=>{
      if(errorMessage){
          console.log(errorMessage);
        }else{
          console.log(`It's currently ${weatherResults.temperature}. It feels like ${weatherResults.apparentTemperature}`);
        }
    });


  }
});
