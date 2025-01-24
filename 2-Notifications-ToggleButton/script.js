function subscribe() {
    const buttonElement = document.querySelector('.js-subscribe-button');
  
    // Toggle button state based on the current text
    if (buttonElement.innerText === 'Subscribe') {
      buttonElement.innerHTML = 'Subscribed';
      buttonElement.classList.add('is-subscribed');
    } else {
      buttonElement.innerHTML = 'Subscribe';
      buttonElement.classList.remove('is-subscribed');
    }
  }

let likeCount = 0;

function toggleLike() {
    const button = document.querySelector('.js-like-button');
    const countElement = document.querySelector('.js-like-count');
  
    if (button.classList.contains('liked')) {
      button.classList.remove('liked');
      button.innerHTML = 'Like';
      likeCount--;
    } else {
      button.classList.add('liked');
      button.innerHTML = 'Liked';
      likeCount++;
    }
  
countElement.textContent = likeCount;
}

function toggleNotifications() {
    const button = document.querySelector('.js-notification-button');

    if (button.classList.contains('enabled')) {
      button.classList.remove('enabled');
      button.innerHTML = 'Enable Notifications!!';
    } else {
      button.classList.add('enabled');
      button.innerHTML = 'Disable Notifications!!';
    }
  }