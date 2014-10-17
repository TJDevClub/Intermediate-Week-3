client = require('twilio')('ACCOUNT_SID', 'AUTH_TOKEN');//found on your twilio page
express = require('express');
bodyParser = require('body-parser');//need to parse JSON better

app = express();
app.use(bodyParser());//so we can parse body data as JSON

app.post('/', function(req, res){
    console.log(req.body);//logs passed params
    res.status(200);//shows everything was completed properly
    res.end('Done');
});

app.listen(8080);//port 8080
console.log("Server running!");

/*twilio functions

makeCall - to, from, url
sendMessage - to, from, body
*/