var muneco= document.querySelector("#muneco");
var textArea= document.querySelector("#texto-encriptado");
var contenedorLabel= document.querySelector(".mensaje2");
var botonCopiar=document.querySelector(".contenedor-boton-copiar");
var botonDesencriptar = document.querySelector("#boton-desencriptar"); 
var botonEncriptar = document.querySelector("#boton-encriptar"); 
var textoIngresado = document.querySelector("#texto-ingresado");
var textoEncriptado = document.querySelector("#texto-encriptado");
var alerta = document.querySelector("#condiciones");
var copiar = document.querySelector("#boton-copiar");
textoIngresado.value= '';
textoEncriptado.value= '';
botonCopiar.style.visibility="hidden";

function ocultar (){
    contenedorLabel.style.visibility= "hidden";
    contenedorLabel.style.transition= "0.2s";
    muneco.style.visibility= "hidden";
    muneco.style.transition= "0.2s";
    botonCopiar.style.visibility="initial";
    botonCopiar.style.transition= "0.2s";

}

function mostrar(){
        contenedorLabel.style.visibility= "initial";
        contenedorLabel.style.transition= "0.2s";
        muneco.style.visibility= "initial";
        muneco.style.transition= "0.2s";
          
}


botonEncriptar.addEventListener('click',function(){
    var mayuscula = false;
    var texto = Array.from(textoIngresado.value);

    for (var i=0; i < texto.length; i++){
        
        if(texto[i].toUpperCase() == texto[i]){
            mayuscula = true;
        }
    }
    console.log(mayuscula);
    
    if(textoIngresado.value != "" && mayuscula == false){
        
            var textoFormateado = textoIngresado.value.replace(/e/gi, "enter").replace(/i/gi, "imes").replace(/a/gi, "ai").replace(/o/gi, "ober").replace(/u/gi, "ufat");
            document.querySelector("#texto-encriptado").value = textoFormateado;
            textoIngresado.value ='';
            ocultar();
        
    }else{
        alerta.innerHTML = "<label style= 'color:red'>¡ campo vacio o letras mayusaculas ! por favor ingrese una palabra valida</label>";
        setTimeout(function(){
            alerta.innerHTML =  " ¡ Solo letras minusculas y sin acento !"; 
        },5000);
    }
});


botonDesencriptar.addEventListener('click',function(){
    
    if(textoEncriptado.value != ""){
        
        var textoFormateado = textoEncriptado.value.replace(/enter/gi, "e").replace(/imes/gi, "i").replace(/ai/gi, "a").replace(/ober/gi, "o").replace(/ufat/gi, "u"); 
        textoIngresado.value = textoFormateado;
        ocultar();
    
    }

});


textArea.addEventListener("focus", function(){
  ocultar();

});
textArea.addEventListener("blur", function(){
    if(textoEncriptado.value == ""){

        mostrar();  
    }
        
});

copiar.addEventListener('click', function(){
    
    navigator.clipboard.writeText(textoEncriptado.value);
    alert("Texto "+ textoEncriptado.value +" copiado");
       
    
});