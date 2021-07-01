var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#txt-output");

var serverURL = "https://api.funtranslations.com/translate/asian-accent.json";

function getTranslationURL(input) {
    return serverURL + "?" + "text= " + input
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("Something is wrong with the sever! Try again later.");
}

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var translatedText = json.contents.translated;
            outputDiv.innerText = translatedText;
        })
        .catch(errorHandler)
};
btnTranslate.addEventListener("click",clickHandler)




   