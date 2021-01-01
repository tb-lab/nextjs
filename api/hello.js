module.exports = (req, httpRes) => {



  var https = require('follow-redirects').https;
  var fs = require('fs');


  var https = require('follow-redirects').https;
var fs = require('fs');

var options = {
  'method': 'GET',
  'hostname': 'm.momoshop.com.tw',
  'path': '/search.momo?_advFirst=N&_advCp=N&curPage=1&searchType=&cateLevel=-1&ent=k&searchKeyword=NA-V170GB-T&_advThreeHours=N&_isFuzzy=0&_imgSH=fourCardType',
  'headers': {
    'Cookie': 'JSESSIONID=1C5A975AF8A3922D76347A0C88A6A722-m1.${vm.name}'
  },
  'maxRedirects': 20
};

var req = https.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });
  


  res.on("end", function (chunk) {
    var jsdom = require('jsdom');
  const { JSDOM } = jsdom;
    var body = Buffer.concat(chunks);
    console.log(body.toString());
    const dom = new JSDOM(body.toString())
    let price = Math.min(...[...dom.window.document.querySelectorAll(".priceSymbol>.price")].map(a=>parseInt(a.textContent.replace(",",""))))

    httpRes.status(200).send(dom.window.document.querySelectorAll(".priceSymbol>.price"))
    httpRes.status(200).send(price.toString())

  });

  res.on("error", function (error) {
    console.error(error);
  });
});

req.end();

var options = {'method': 'POST','hostname': 'identitytoolkit.googleapis.com','path': '/v1/accounts:sendOobCode?key=AIzaSyBvNXJnpm-4kyDZN2Zfn38Q5og1XHzw4Y0','headers': {'Content-Type': 'application/json'},'maxRedirects': 20};

  var req = https.request(options, function (res) {

    var chunks = [];

    res.on("data", function (chunk) {
      chunks.push(chunk);
    });

    res.on("end", function (chunk) {
      var body = Buffer.concat(chunks);
      console.log(body.toString());
      // httpRes.status(200).send(body.toString())
    });

    res.on("error", function (error) {
      console.error(error);
    });
  });

  var postData = JSON.stringify({ "requestType": "PASSWORD_RESET", "email": "uhsw@icloud.com" });

  req.write(postData);

  req.end();


}