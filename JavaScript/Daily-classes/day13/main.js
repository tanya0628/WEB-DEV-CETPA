let dropdown = document.querySelector('#fruits');
let button = document.querySelector('#showButton');
let output = document.querySelector('#output');


button.addEventListener('mouseover',() => {
    const selectedValue = dropdown.value;
    output.textContent =` ${selectedValue}`;
});



