// this is what happens when someone cancels their account
const stripe = require('stripe')(process.env.STRIPE_KEY);

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);

  stripe.subscriptions.del(data.subscriptionId,
    { at_period_end: true },
    (err, confirmation) => {
      if (!err) {
        // ** you probably want to update your database here **
        callback(null, { statusCode: 200 });
      }
      else {
       console.log(err);
      }
    }
  );
}
