//12f
let timeoutId;

function addToCart() {
  const addedText = document.querySelector('.js-added-text');

  addedText.innerHTML = 'Added';

  clearTimeout(timeoutId);

  timeoutId = setTimeout(function() {
    addedText.innerHTML = '';
  }, 2000);
}



/*
//12g
setInterval(function() {
  if (document.title === 'App') {
    document.title = '(2) New messages';
  } else {
    document.title = 'App';
  }
}, 1000);
*/


/*
//12h
let messages = 2;

setInterval(function() {
  if (document.title === 'App') {
    document.title = `(${messages}) New messages`;
  } else {
    document.title = 'App';
  }
}, 1000);

function addTitle() {
  messages++;
}
function removeTitle() {
  messages--;
}
*/



//12i


let messages = 2;

let intervalId;

let isDisplayNotification;

displayNotification();

function displayNotification() {
  if (isDisplayNotification) {
    return;
  }
  isDisplayNotification = true;

  intervalId = setInterval(function() {
    if (document.title === 'App') {
      document.title = `(${messages}) New messages`;
    } else {
      document.title = 'App';
    }
  }, 1000);

}

function stopNotification() {
  isDisplayNotification = false;

  clearInterval(intervalId);
  document.title = 'App';
}

function addTitle() {
  messages++;
  displayNotification();
}
function removeTitle() {
  if (messages > 0) {
    messages--;

    if (messages === 0) {
      stopNotification();
    }
  }
}