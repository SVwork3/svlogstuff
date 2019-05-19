/*{
  "v": 3,
  "q": {
    "find": {
      "in.e.a": "1CHNJAAxs95H1UCsqxFgRbueeugyfAma3A"
    },
    "limit": 10
  }
}
API Key: 1L63YEnudcqR1QMcdxtdsAmRWZ5bunXKCW

curl --header "key: 1L63YEnudcqR1QMcdxtdsAmRWZ5bunXKCW" https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAiaW4uZS5hIjogIjFDSE5KQUF4czk1SDFVQ3NxeEZnUmJ1ZWV1Z3lmQW1hM0EiCiAgICB9LAogICAgImxpbWl0IjogMTAKICB9Cn0=

https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAiaW4uZS5hIjogIjFDSE5KQUF4czk1SDFVQ3NxeEZnUmJ1ZWV1Z3lmQW1hM0EiCiAgICB9LAogICAgImxpbWl0IjogMTAKICB9Cn0=

var obj = JSON.parse(str);

*/



var apikey = "1L63YEnudcqR1QMcdxtdsAmRWZ5bunXKCW";
var apiURI = "https://genesis.bitdb.network/q/1FnauZ9aUH2Bex6JzdcV4eNX7oLSSEbxtN/ewogICJ2IjogMywKICAicSI6IHsKICAgICJmaW5kIjogewogICAgICAiaW4uZS5hIjogIjFDSE5KQUF4czk1SDFVQ3NxeEZnUmJ1ZWV1Z3lmQW1hM0EiCiAgICB9LAogICAgImxpbWl0IjogMTAKICB9Cn0="

var request = require('request');



request({
    headers: {
      'key': apikey,
    },
    uri: apiURI,
    method: 'GET'
  }, function (err, res, body) {
	/*console.log(body);*/
	var resobj = JSON.parse(body);
	var data = [...resobj.c, ...resobj.u];

	console.log(data[0].out[0].s2);

	
  });
