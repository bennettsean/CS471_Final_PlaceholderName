const http = require('http');
const express = require('express');
// twilio specific require - see reference link in README for more info on twilio
const MessagingResponse = require('twilio').twiml.MessagingResponse;
const bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
// reading sms
app.post('/sms', (req, res) => {

    // request to my db at localhost 3000
    http.get('http://localhost:3000/x', (resp) => {
        let data = '';

        resp.on('data', (chunk) => {
            data += chunk;
        });

        resp.on('end', () => {
            // parsing all tutors in json
            const respobj = JSON.parse(data);
            console.log(respobj);

            // twilio msg construct
            const twiml = new MessagingResponse();



            // res respond code specific to twilio
            res.writeHead(200, { 'Content-Type': 'text/xml' });
            res.end(twiml.toString());

        });
    }).on('error', (e) => {
        console.log(e.message);
    });
});

// server creation specifc for twilio
http.createServer(app).listen(1337, () => {
    console.log('Express server listening on port 1337');
});