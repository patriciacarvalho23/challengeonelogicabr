
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação */    


var botaocripto = document.querySelector("#btn-cripto");
botaocripto.addEventListener("click", function(event){
    event.preventDefault();
        
    var textoDigitado = document.querySelector("#input-texto");
    var texto = textoDigitado.value.replace(/e/g,"enter")
                                    .replace(/i/g, "imes")
                                    .replace(/a/g, "ai")
                                    .replace(/o/g,"ober")
                                    .replace(/u/g, "ufat");
    var resultado = texto;
    
    var mensagem = document.querySelector("#msg");
    mensagem.value = resultado;
});

var botaodescripto = document.querySelector("#btn-descripto");
botaodescripto.addEventListener("click", function(event){
    event.preventDefault();
        
    var textoCriptografado = document.querySelector("#input-texto");
    var textoCrip = textoCriptografado.value.replace(/enter/g, "e")
                                            .replace(/imes/g, "i")
                                            .replace(/ai/g, "a")
                                            .replace(/ober/g, "o")
                                            .replace(/ufat/g, "u");
    var descriptografado = textoCrip;
    
    var textoFinal = document.querySelector("#msg");
    textoFinal.value = descriptografado;
});

function copy() {
    var copyText = document.querySelector("#msg");
    copyText.select();
    document.execCommand("copy");
  }
  
  document.querySelector("#btn-copy").addEventListener("click", copy);


