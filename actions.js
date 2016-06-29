//Binding and unbinding of event handlers
//How to attach or detach a handler function to an event, such as click, focus, or submit.
//Modern browsers support addEventListener() and removeEventListener() for adding or removing event handlers;
//IE 8 has its own methods.
//If you need to support both, use these little
//helpers as a replacement to jQuery's $.on() and $.off() methods:

window.onload = function(){

document.getElementById('1').onclick = function() {
    alert('I am a penguin');
}

document.getElementById('2').onclick = function() {
    alert('I am a bee');
}

document.getElementById('3').onclick = function() {
    alert('I am a cat');
}
};
