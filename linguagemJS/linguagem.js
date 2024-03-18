let textInput = document.querySelector("#input__texto")
let textOutput = document.querySelector("#output__texto")

function cripto()
{
    var texto = textInput.value;
    var resultCripto = texto.replace(/e/g, 'enter').replace(/i/g, "imes").replace(/a/g, 'ai').replace(/o/g, 'ober').replace(/u/g, 'ufat')
    document.querySelector('h2').innerHTML= resultCripto
}
function descripto(){
    var textoCripto= textInput.value
    var resultDescripto = textoCripto.replace(/enter/g, 'e').replace(/imes/g, "i").replace(/ai/g, 'a').replace(/ober/g, 'o').replace(/ufat/g, 'u')
    document.querySelector('h2').innerHTML= resultDescripto

} 

function copiarTexto(){
    let textoCopy= document.getElementById('copia').innerHTML
    navigator.clipboard.writeText(textoCopy)
    alert('texto copiado')
    textInput.value = " "
}