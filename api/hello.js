module.exports = (req, res) => {

    var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'POST',
  'hostname': 'identitytoolkit.googleapis.com',
  'path': '/v1/accounts:sendOobCode?key=AIzaSyBvNXJnpm-4kyDZN2Zfn38Q5og1XHzw4Y0',
  'headers': {
    'Content-Type': 'application/json'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function (chunk) {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });

  res.on("error", function (error) {
    console.error(error);
  });
});

var postData = JSON.stringify({"requestType":"PASSWORD_RESET","email":"uhsw@icloud.com"});

req.write(postData);

req.end();


  res.status(200).send(`Hello !`)
}