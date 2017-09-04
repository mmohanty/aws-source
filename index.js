exports.handler = function(event, context, callback) {
    var currentTime = "2017-12-09"; 
    //currentTime.setTimezone("America/Los_Angeles");
    callback(null, {
        statusCode: '200',
        body: 'The time in Los Angeles is: ' + currentTime.toString(),
    });
}