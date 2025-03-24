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
// added arrow function in 12p and 12q
/*
function updateButton() {
  const buttonElement = document.querySelector('.js-button');

  buttonElement.innerHTML = 'Loading...';

  setTimeout(function() {
    buttonElement.innerHTML = 'Finished';
  }, 1000);
}
*/


//12e
// added arrow function in 12p and 12q
/*
function addToCart() {
  const addedText = document.querySelector('.js-added-text');

  addedText.innerHTML = 'Added';

  setTimeout(function() {
    addedText.innerHTML = '';
  }, 2000);
}
*/



//Part 2
/*
//12j
const multiply = (num1, num2) => {
  return num1 * num2;
}

console.log(multiply(2, 3));
console.log(multiply(7, 10));
*/

//12k
const multiply = (num1, num2) => num1 * num2;

console.log(multiply(2, 3));
console.log(multiply(7, 10));


//12l
function countPositive(nums) {
  let count = 0;

  nums.forEach((value, index) => {
    if (value > 0) {
      count++;
    }
  });
  return count;
}

console.log(countPositive([1, -3, 5]));
console.log(countPositive([-2, 3, -5, 7, 10]));


//12m
function addNum(array, num) {
  return array.map(value => value + num);
}
console.log(addNum([1, 2, 3], 2));
console.log(addNum([-2, -1, 0, 99], 2));


//12n
/*
function removeEgg(foods) {
  return foods.filter((value) => {
    return value !== 'egg';
  });
}

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));
*/


//12o
//remove first two eggs
function removeEgg(foods) {
  let count = 0;
  
  return foods.filter((value, index) => {
    if (value === 'egg') {
      count++;
      return count > 2;
    }
    return true;
  });
}

//supersimpledev's solution
/*
function removeEgg(foods) {
  let eggsRemoved = 0;

  return foods.filter((food) => {
    // If the food is 'egg', we should return false
    // but only if we haven't removed 2 eggs already.
    if (food === 'egg' && eggsRemoved < 2) {
      eggsRemoved++;
      return false;
    }

    return true;
  });
}
*/

console.log(removeEgg(['egg', 'apple', 'egg', 'egg', 'ham']));



//12p
//added new features in 12q
/*
function updateButton() {
  const buttonElement = document.querySelector('.js-button');

  buttonElement.innerHTML = 'Loading...';

  setTimeout(() => {
    buttonElement.innerHTML = 'Finished';
  }, 1000);
}


function addToCart() {
  const addedText = document.querySelector('.js-added-text');

  addedText.innerHTML = 'Added';

  setTimeout(() => {
    addedText.innerHTML = '';
  }, 2000);
}
*/



//12q
const buttonElement = document.querySelector('.js-button');

buttonElement.addEventListener('click', () => {
  updateButton();
});

function updateButton() {
  const buttonElement = document.querySelector('.js-button');

  buttonElement.innerHTML = 'Loading...';

  setTimeout(() => {
    buttonElement.innerHTML = 'Finished';
  }, 1000);
}


const addToCartElement = document.querySelector('.js-add-to-cart');

addToCartElement.addEventListener('click', () => {
  addToCart();
});

function addToCart() {
  const addedText = document.querySelector('.js-added-text');

  addedText.innerHTML = 'Added';

  setTimeout(() => {
    addedText.innerHTML = '';
  }, 2000);
}

