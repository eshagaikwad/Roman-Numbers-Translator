var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputDiv = document.querySelector("#output");

var serverURL="https://api.funtranslations.com/translate/minion.json";

 function getTranslationURL(input) {
     return serverURL + "?" + "text= " + input
 }

 function errorHandler(error) {
     console.log("error ocurred",error);
    alert("something went wrong with the server! try after some time ")
 }

function clickHandler() {
    var inputText = txtInput.value;

    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json=> { 
        var translatedText = json.contents.translated;
      outputDiv.innerText = translatedText;  
    })
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)






   