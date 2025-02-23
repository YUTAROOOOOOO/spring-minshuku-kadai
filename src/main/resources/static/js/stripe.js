const stripe = Stripe('pk_test_51QsMduBxTf1M0JpPUzyf4fuRLOroHOftszCKGuOvyI6DF3LBhdFtJz8OSIRfZzhxpaTVUtlZF15B7AysB5vV7U6O00SMbyEV9S');
const paymentButton = document.querySelector('#paymentButton');

paymentButton.addEventListener('click', () => {
 stripe.redirectToCheckout({
   sessionId: sessionId
 })
});