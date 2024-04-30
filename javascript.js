
const body = document.querySelector('body');
const buttons = document.querySelectorAll('button'); // querySelectorAll to select all buttons
const colors = ['#111214','#f0f8ff'];

body.style.backgroundColor ='#111214';

buttons.forEach(button => {
    button.addEventListener('click', function() { // Listen for the "click" event
        const colorIndex = Math.floor(Math.random() * colors.length); // Math.floor() instead of parseInt()
        body.style.backgroundColor = colors[colorIndex];
    });
});

