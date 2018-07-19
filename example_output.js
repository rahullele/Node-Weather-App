Sample code samples for 'request'

Code 1:
const request=require('request');

request({
  url:'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20Philadelphia',
  json:true
}, (error, response, body)=>{
 console.log(body,undefined,2);
});

Output:

{ results:
   [ { address_components: [Array],
       formatted_address: '1301 Lombard St, Philadelphia, PA 19147, USA',
       geometry: [Object],
       place_id:
        'EiwxMzAxIExvbWJhcmQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDcsIFVTQSIbEhkKFAoSCU38VoEkxsaJEedji1ij51aUEJUK',
       types: [Array] } ],
  status: 'OK' }


Code 2:
const request=require('request');

request({
  url:'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20Philadelphia',
  json:true
}, (error, response, body)=>{
 console.log(JSON.stringify(body,undefined,2));
});

Output:

{
  "results": [
    {
      "address_components": [
        {
          "long_name": "1301",
          "short_name": "1301",
          "types": [
            "street_number"
          ]
        },
        {
          "long_name": "Lombard Street",
          "short_name": "Lombard St",
          "types": [
            "route"
          ]
        },
        {
          "long_name": "Center City",
          "short_name": "Center City",
          "types": [
            "neighborhood",
            "political"
          ]
        },
        {
          "long_name": "Philadelphia",
          "short_name": "Philadelphia",
          "types": [
            "locality",
            "political"
          ]
        },
        {
          "long_name": "Philadelphia County",
          "short_name": "Philadelphia County",
          "types": [
            "administrative_area_level_2",
            "political"
          ]
        },
        {
          "long_name": "Pennsylvania",
          "short_name": "PA",
          "types": [
            "administrative_area_level_1",
            "political"
          ]
        },
        {
          "long_name": "United States",
          "short_name": "US",
          "types": [
            "country",
            "political"
          ]
        },
        {
          "long_name": "19147",
          "short_name": "19147",
          "types": [
            "postal_code"
          ]
        },
        {
          "long_name": "1003",
          "short_name": "1003",
          "types": [
            "postal_code_suffix"
          ]
        }
      ],
      "formatted_address": "1301 Lombard St, Philadelphia, PA 19147, USA",
      "geometry": {
        "location": {
          "lat": 39.9444071,
          "lng": -75.1631718
        },
        "location_type": "RANGE_INTERPOLATED",
        "viewport": {
          "northeast": {
            "lat": 39.9457560802915,
            "lng": -75.16182281970849
          },
          "southwest": {
            "lat": 39.9430581197085,
            "lng": -75.1645207802915
          }
        }
      },
      "place_id": "EiwxMzAxIExvbWJhcmQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDcsIFVTQSIbEhkKFAoSCU38VoEkxsaJEedji1ij51aUEJUK",
      "types": [
        "street_address"
      ]
    }
  ],
  "status": "OK"
}

Code 3:

const request=require('request');

request({
  url:'http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20Philadelphia',
  json:true
}, (error, response, body)=>{
 console.log(JSON.stringify(response,undefined,2));
});

Output:

{
 "statusCode": 200,
 "body": {
   "results": [
     {
       "address_components": [
         {
           "long_name": "1301",
           "short_name": "1301",
           "types": [
             "street_number"
           ]
         },
         {
           "long_name": "Lombard Street",
           "short_name": "Lombard St",
           "types": [
             "route"
           ]
         },
         {
           "long_name": "Center City",
           "short_name": "Center City",
           "types": [
             "neighborhood",
             "political"
           ]
         },
         {
           "long_name": "Philadelphia",
           "short_name": "Philadelphia",
           "types": [
             "locality",
             "political"
           ]
         },
         {
           "long_name": "Philadelphia County",
           "short_name": "Philadelphia County",
           "types": [
             "administrative_area_level_2",
             "political"
           ]
         },
         {
           "long_name": "Pennsylvania",
           "short_name": "PA",
           "types": [
             "administrative_area_level_1",
             "political"
           ]
         },
         {
           "long_name": "United States",
           "short_name": "US",
           "types": [
             "country",
             "political"
           ]
         },
         {
           "long_name": "19147",
           "short_name": "19147",
           "types": [
             "postal_code"
           ]
         },
         {
           "long_name": "1003",
           "short_name": "1003",
           "types": [
             "postal_code_suffix"
           ]
         }
       ],
       "formatted_address": "1301 Lombard St, Philadelphia, PA 19147, USA",
       "geometry": {
         "location": {
           "lat": 39.9444071,
           "lng": -75.1631718
         },
         "location_type": "RANGE_INTERPOLATED",
         "viewport": {
           "northeast": {
             "lat": 39.9457560802915,
             "lng": -75.16182281970849
           },
           "southwest": {
             "lat": 39.9430581197085,
             "lng": -75.1645207802915
           }
         }
       },
       "place_id": "EiwxMzAxIExvbWJhcmQgU3QsIFBoaWxhZGVscGhpYSwgUEEgMTkxNDcsIFVTQSIbEhkKFAoSCU38VoEkxsaJEedji1ij51aUEJUK",
       "types": [
         "street_address"
       ]
     }
   ],
   "status": "OK"
 },
 "headers": {
   "content-type": "application/json; charset=UTF-8",
   "date": "Wed, 04 Jul 2018 01:53:58 GMT",
   "expires": "Thu, 05 Jul 2018 01:53:58 GMT",
   "cache-control": "public, max-age=86400",
   "access-control-allow-origin": "*",
   "server": "mafe",
   "x-xss-protection": "1; mode=block",
   "x-frame-options": "SAMEORIGIN",
   "accept-ranges": "none",
   "vary": "Accept-Language,Accept-Encoding",
   "connection": "close"
 },
 "request": {
   "uri": {
     "protocol": "http:",
     "slashes": true,
     "auth": null,
     "host": "maps.googleapis.com",
     "port": 80,
     "hostname": "maps.googleapis.com",
     "hash": null,
     "search": "?address=1301%20lombard%20street%20Philadelphia",
     "query": "address=1301%20lombard%20street%20Philadelphia",
     "pathname": "/maps/api/geocode/json",
     "path": "/maps/api/geocode/json?address=1301%20lombard%20street%20Philadelphia",
     "href": "http://maps.googleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20Philadelphia"
   },
   "method": "GET",
   "headers": {
     "accept": "application/json"
   }
 }
}

Code 4:

const request=require('request');

request({
  url:'http://mapogogleapis.com/maps/api/geocode/json?address=1301%20lombard%20street%20Philadelphia',
  json:true
}, (error, response, body)=>{
 console.log(JSON.stringify(error,undefined,2));
});


Output:

{
  "errno": "ENOTFOUND",
  "code": "ENOTFOUND",
  "syscall": "getaddrinfo",
  "hostname": "mapogogleapis.com",
  "host": "mapogogleapis.com",
  "port": 80
}

Sample code samples for promises
Promises are like callbacks but with two advantages. Every promise will either end in resolve or reject but not both.

Code-1

var somePromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    //resolve('Hey it worked');
    reject('Unable to fulfil promise');
  },2500);
}
);

somePromise.then((message)=>{
  console.log('Success: ',message);
},(errorMessage)=>{
  console.log('Error: ',errorMessage);
});

Advantage - .then() method has two separate methods for resolve and reject whereas in callback we have just two
variables likes (errorMessage, result) for success and failure of a task. In callback, to separate error and success conditions
you need to write if..else statements. This is not required in promises.

Code-2

var somePromise=new Promise((resolve,reject)=>{
  setTimeout(()=>{
    resolve('Hey it worked');
    resolve();
    reject('Unable to fulfil promise');
  },2500);
}
);

somePromise.then((message)=>{
  console.log('Success: ',message);
},(errorMessage)=>{
  console.log('Error: ',errorMessage);
});

Advantage - If I write callback() two times, it is executed 2 times. But here, in the above code resolve/reject is called only once
even if we give multiple calls to it. Before a promise is resolved or rejected, it is in a state called pending.

Code-3

var asyncAdd=(a,b)=>{

  return new Promise((resolve,reject)=>{

   setTimeout(()=>{
      if(typeof a==='number' && typeof b==='number')
        resolve(a+b);
        else reject('Arguments are not numbers.');

   },1500);

 });
};

asyncAdd(5,7).then((result)=>{
  console.log('Result: ',result);
}, (errorMessage)=>{
   console.log(errorMessage);
});

Code-4 - Promise Chaining

var asyncAdd=(a,b)=>{

  return new Promise((resolve,reject)=>{

   setTimeout(()=>{
      if(typeof a==='number' && typeof b==='number')
        resolve(a+b);
        else reject('Arguments are not numbers.');

   },1500);

 });
};

asyncAdd(5,7).then((result)=>{
  console.log('Result: ',result);
  return asyncAdd(result,33);
}, (errorMessage)=>{
   console.log(errorMessage);
});

Output:
Result:  12
Should be 45 45

Code-5 - Promise chaining with error case

var asyncAdd=(a,b)=>{

  return new Promise((resolve,reject)=>{

   setTimeout(()=>{
      if(typeof a==='number' && typeof b==='number')
        resolve(a+b);
        else reject('Arguments are not numbers.');

   },1500);

 });
};

asyncAdd(5,'7').then((result)=>{
  console.log('Result: ',result);
  return asyncAdd(result,33);
}, (errorMessage)=>{
   console.log(errorMessage);
});

Output:

Arguments are not numbers.
Should be 45 undefined

Here, error case for the first addition prints but then it prints the success case for second with an
'undefined'. To avoid this, write the code below -
