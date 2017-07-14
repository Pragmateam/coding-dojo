var app = Elm.Cart.embed(document.getElementById('cart-main'));

window.addEventListener('addToCart', (event) => {
  app.ports.addToCartEvents.send(event.detail);
}, false);
