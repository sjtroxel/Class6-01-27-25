let cartCount = 0;

function toggleCart() {
  const button = document.querySelector('.js-cart-button');
  const badge = document.querySelector('.js-cart-badge');

  if (button.classList.contains('in-cart')) {
    button.classList.remove('in-cart');
    button.innerHTML = 'Add to Cart';
    cartCount--;
  } else {
    button.classList.add('in-cart');
    button.innerHTML = 'Remove from Cart';
    cartCount++;
  }

  badge.innerHTML = cartCount;
}

document.querySelector('.js-cart-button').addEventListener('click', toggleCart);
