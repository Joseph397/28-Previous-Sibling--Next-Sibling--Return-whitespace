// Previous Sibling
// Next Sibling
// Return Whitespace inbetween elements counts as a sibling -- #text

const first = document.querySelector('.first');
const second = (first.nextSibling.nextSibling.style.color = 'red');
console.log(second);

const last = document.querySelector('#last');
const third = last.previousSibling.previousSibling.style.color = 'blue';
console.log(third);
console.log(last.nextSibling.nextSibling); // returns null because there is no next sibling