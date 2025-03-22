//12a
const add = function() {
  console.log(2 + 3);
}
add();
add();


//12b
function runTwice(fun) {
  fun();
  fun();
}

runTwice(function() {
  console.log('12b');
});

runTwice(add);


/*
//12c
function updateButton() {
  const buttonElement = document.querySelector('.js-button');

  setTimeout(function() {
    buttonElement.innerHTML = 'Finished';
  }, 1000);
}
*/


//12d
function updateButton() {
  const buttonElement = document.querySelector('.js-button');

  buttonElement.innerHTML = 'Loading...';

  setTimeout(function() {
    buttonElement.innerHTML = 'Finished';
  }, 1000);
}


//12e
function addToCart() {
  const addedText = document.querySelector('.js-added-text');

  addedText.innerHTML = 'Added';

  setTimeout(function() {
    addedText.innerHTML = '';
  }, 2000);
}
