const button = document.querySelector('#button');
const text = document.querySelector('#text');

button.addEventListener('click', function() {
  text.textContent = "The button has been clicked!";
});
