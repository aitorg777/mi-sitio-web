const box = document.getElementById('gradient-box');
const codeText = document.getElementById('code-text');
const genBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');

function generateColor() {
    const hex = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
}

function updateGradient() {
    const color1 = generateColor();
    const color2 = generateColor();
    const gradient = `linear-gradient(135deg, ${color1}, ${color2})`;
    
    document.body.style.background = gradient;
    box.style.background = gradient;
    codeText.innerText = gradient;
}

// Evento para el botón de generar
genBtn.addEventListener('click', updateGradient);

// Evento para el botón de copiar
copyBtn.addEventListener('click', () => {
    const text = codeText.innerText;
    navigator.clipboard.writeText(text).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = "¡Copiado!";
        setTimeout(() => copyBtn.innerText = originalText, 2000);
    });
});

// Ejecutar una vez al cargar para que no salga "Esperando generación..."
updateGradient();