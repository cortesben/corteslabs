exports.handler = function(event, context, callback) {
    callback(null, {
        statusCode: 200,
        body: 'Hello, World',
        event: JSON.stringify(event, null, 4)
        });
};
