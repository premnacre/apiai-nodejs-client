var apiai = require('apiai');

var app = apiai("58b7a3867d0c4dbb93e729fb28089522");

var request = app.textRequest('hi', {
    sessionId: 'a4503331-f2a1-4056-a19e-9a7a6449b776'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
