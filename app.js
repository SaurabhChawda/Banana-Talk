var btnTranslate = document.querySelector("#btn-translate"); 
var txtInput = document.querySelector("#txt-input"); //take input from input box 
var outputDiv = document.querySelector("#output");   //Give input from input box

var serverURL = "https://api.funtranslations.com/translate/minion.json"  //Server link 

//GetTranslation call this for text with server link(4)
function getTranslationURL(text){
    return serverURL +"?" +"text=" +text
}

function errorHandler(error){
    console.log("error occured",error);
    alert("Something wrong with Server! Try Again")
}

function clickHandler(){      //2
    console.log("Button Clicked");
    var inputText =txtInput.value;


fetch(getTranslationURL(inputText)) //call GetTranslation funtion (3)
     .then(response => response.json())  //Get Response back from GetTranslation function and convert text into new language (5)
     .then(json =>{
         var translatedText = json.contents.translated;
         outputDiv.innerText = translatedText;
     })
     .catch(errorHandler)
    }
btnTranslate.addEventListener("click", clickHandler) //1
