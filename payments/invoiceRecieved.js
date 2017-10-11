/* 
  this is called when an invoice is recieved. 
  All you have to do is send Stripe a 200 back
*/

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  
  callback(null, { statusCode: 200 });
}