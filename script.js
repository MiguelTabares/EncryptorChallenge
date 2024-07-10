// Referencias a los elementos del DOM
const inputText = document.getElementById('inputText');
const outputText = document.getElementById('outputText');
const encryptButton = document.getElementById('encryptButton');
const decryptButton = document.getElementById('decryptButton');
const copyButton = document.getElementById('copyButton');

// Función para encriptar el texto
function encrypt(text) {
    let result = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 + 3) % 26) + 97);
        } else {
            result += char;
        }
    }
    return result;
}

// Función para desencriptar el texto
function decrypt(text) {
    let result = '';
    for (let char of text) {
        if (char >= 'a' && char <= 'z') {
            result += String.fromCharCode(((char.charCodeAt(0) - 97 - 3 + 26) % 26) + 97);
        } else {
            result += char;
        }
    }
    return result;
}

// Evento para encriptar
encryptButton.addEventListener('click', () => {
    const text = inputText.value.toLowerCase().replace(/[^a-z\s]/g, '');
    outputText.value = encrypt(text);
});

// Evento para desencriptar
decryptButton.addEventListener('click', () => {
    const text = inputText.value.toLowerCase().replace(/[^a-z\s]/g, '');
    outputText.value = decrypt(text);
});

// Evento para copiar el texto
copyButton.addEventListener('click', () => {
    outputText.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
});
