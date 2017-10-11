/*
  This is called when the subscription has been 'deleted' with Stripe
  meaning the at_period_end has ended. You should update your database
  here. 'user' is the unique customer identifier from Stripe
*/

const stripe = require('stripe')(process.env.STRIPE_KEY);

module.exports.main = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false;
  const data = JSON.parse(event.body);
  const user = data.customer;

  // ** you probably want to update your database **
  callback(null, { statusCode: 200 });  
}