function filtroVocales(frase){
    const vocales =["a", "e","i","o","u", "á","é", "í", "ó", "ú"];
    let vocales_frase="";
    for(let letra of frase.toLowerCase()){
        if(vocales.includes(letra)){
            vocales_frase=vocales_frase+letra;
        }
    
    }
    console.log(vocales_frase);
}

function filtroConstantes(frase){
    const constantes =["b", "c","d","f", "g","h", "j", "k", "l","m", "n","ñ", "p", "q", "r", "s", "t","v", "w", "x", "y","z"];
    let constantes_frase="";
    for(let letra of frase.toLowerCase()){
        if(constantes.includes(letra)){
            constantes_frase=constantes_frase+letra;
        }
    
    }
    console.log(constantes_frase);
}

filtroVocales("Hola para vocales");
filtroConstantes("Hola para vocales");