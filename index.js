const buttonNode = document.querySelector('.button');
buttonNode.addEventListener('click', function(){
    hideText();
});

function hideText(){
    const text = document.querySelector('.text');
    text.hidden = true;

    const buttonNode = document.querySelector('.button');
    buttonNode.removeEventListener('click', hideText);
    buttonNode.addEventListener('click', showText);
}

function showText(){
    const text = document.querySelector('.text');
    text.hidden = false;
    
    buttonNode.removeEventListener('click', showText);
    buttonNode.addEventListener('click', hideText);

}