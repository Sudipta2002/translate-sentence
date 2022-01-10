var inputText = document.querySelector('#input-text');
var outputText = document.querySelector('#output-text');
var buttonTranslate = document.querySelector('#btn-translate');



function clickHandler() {
    console.log("clicked");
    console.log(inputText.value);
}
buttonTranslate.addEventListener("click", clickHandler);