// La letra "a" es convertida para "ai"
// La letra "e" es convertida para "enter"
// La letra "i" es convertida para "imes"
// La letra "o" es convertida para "ober"
// La letra "u" es convertida para "ufat"

// Requisitos:

// Debe funcionar solo con letras minúsculas
// No deben ser utilizados letras con acentos ni caracteres especiales
// Debe ser posible convertir una palabra para la versión encriptada también devolver una palabra encriptada para su versión original.

// casa => caisai
function encriptar() {
    let text = document.getElementById("textoAProcesar").value;


    let newText = "";
    for (let i = 0; i < text.length; i++) {
        switch (text[i]) {
            case 'a':
                newText += 'ai'
                break;
            case 'e':
                newText += 'enter'
                break;
            case 'i':
                newText += 'imes'
                break;
            case 'o':
                newText += 'ober'
                break;
            case 'u':
                newText += 'ufat'
                break;
            default:
                newText += text[i]
                continue;
        }
    }
    let titulo = document.querySelector('.tituloContenedorIzquierdo')
    let mensaje = document.querySelector('.textoContenedorIzquierdo')
    titulo.innerText = "Mensaje Encriptado"
    mensaje.innerText = newText
    alert(newText)
}

function desencriptar() {
    let text = document.getElementById("textoAProcesar").value;
    let newText = "";
    // caisai => casa
    const letraA = 'ai'
    const letraE = 'enter'
    const letraI = 'imes'
    const letraO = 'ober'
    const letraU = 'ufat'

    const expRegA = new RegExp(letraA, 'g');
    const expRegE = new RegExp(letraE, 'g');
    const expRegI = new RegExp(letraI, 'g');
    const expRegO = new RegExp(letraO, 'g');
    const expRegU = new RegExp(letraU, 'g');


    newText = text.replace(expRegA, 'a').replace(expRegE, 'e').replace(expRegI, 'i')
        .replace(expRegO, 'o').replace(expRegU, 'u')


    let titulo = document.querySelector('.tituloContenedorIzquierdo')
    let mensaje = document.querySelector('.textoContenedorIzquierdo')
    titulo.innerText = "Mensaje Desencriptado"
    mensaje.innerText = newText
    alert(newText)
    // alert(newText)
}

function reiniciar() {
    alert('hola')
    let titulo = document.querySelector('.tituloContenedorIzquierdo')
    let mensaje = document.querySelector('.textoContenedorIzquierdo')

    titulo.innerText = "Ningún mensaje fue encontrado"
    mensaje.innerText = "Ingresá el texto que desees encriptar o desencriptar"
    var textareaElement = document.getElementById("textoAProcesar");

    document.getElementById("textoAProcesar").value = ""
    // Establece el foco en el textarea
    textareaElement.focus();
}

document.addEventListener("DOMContentLoaded", function () {
    // Espera a que el DOM esté completamente cargado

    // Obtiene el elemento textarea por su ID
    var textareaElement = document.getElementById("textoAProcesar");

    // Establece el foco en el textarea
    textareaElement.focus();
});