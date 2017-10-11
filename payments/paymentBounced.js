/* 
  This is called when a subscription payment is bounced. 
  For this we don't want to use 'at_period_end' because
  that will give them another month. 
*/

const stripe = require('stripe')(process.env.STRIPE_KEY);

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const jsonData = JSON.parse(event.body);  
  const subscriptionId = jsonData.subscription;

  stripe.subscriptions.del(subscriptionId,
   (err, confirmation) => {
     if (!err) {
       // update your database here
       callback(null, { statusCode: 200 });     
     }
   }
  );
}