function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() => elemento.innerHTML += letra, 4.7 * i);
    } )
}

const titulo = document.querySelector('#binario');
typeWriter(titulo);

function typeWriterDescription(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) =>{
        setTimeout(() => elemento.innerHTML += letra, 75 * i);
        if (letra == '.'){
            setTimeout(() => elemento.innerHTML += '<br>', 75 * i);
        }
    } )
}

const description = document.querySelector('.description');
typeWriterDescription(description);




