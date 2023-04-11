
var texto_encriptar = document.getElementById("encriptar").value
var btn_encriptar = document.getElementById('btn_encriptar')
var btn_desencriptar = document.getElementById('btn_desencriptar')
function encriptar() {
    let texto = "texto_encriptar"
    for (let index = 0; index < texto.length; index++) {

        console.log(texto[index]);
        if (texto[index] == 'a') {
            texto.replace(texto[index], "ai")
        }
        if (texto[index] == 'e') {
            texto.replace(texto[index], "enter")
        }
        if (texto[index] == 'i') {
            texto.replace(texto[index], "imes")
        }
        if (texto[index] == 'o') {
            texto.replace(texto[index], "ober")
        }
        if (texto[index] == 'u') {
            texto.replace(texto[index], "ufat")
        }


    }
    return console.log(texto);
}

btn_encriptar.onclick = encriptar
