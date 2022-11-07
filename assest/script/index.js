'use strict';
/*
    JavaScript Basics
    Matthew Banuag

    Basic interaction
*/

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');

one.addEventListener('click', function() {
    this.classList.toggle('one');

    if(this.classList.contains('one')) {
        this.innerText = 'Click me to make me white again';
    } else {
        this.innerText = 'Click me to make me red';
    }
});

two.addEventListener('click', function() {
    this.classList.toggle('two');

    if(this.classList.contains('two')) {
        this.innerText = 'Click me to make me white again';
    } else {
        this.innerText = 'Click me to make me green';
    }
});

three.addEventListener('click', function() {
    this.classList.toggle('three');

    if(this.classList.contains('three')) {
        this.innerText = 'Click me to make me white again';
    } else {
        this.innerText = 'Click me to make me orange';
    }
});