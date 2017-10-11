/*
  Use this when you want to subscribe someone to a plan.
  You will have to pass in a stripe id for a user.
*/

const stripe = require('stripe')(process.env.STRIPE_KEY);

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);

  stripe.subscriptions.create({
    customer: 'USER_STRIPE_ID ',
    plan: 'STRIPE_PLAN_NAME',
    }, (err, subscription) => {
      if (!err) {
        // ** you probably want to update your database with the subscription.id **
        callback(null, { statusCode: 200 });        
      }
  });
}