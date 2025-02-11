// Seleccionar elementos del DOM
const mainContainer = document.getElementById("main-container");
const message = document.getElementById("message");
const gif = document.getElementById("gif");
const btnYes = document.getElementById("btn-yes");
const btnNo = document.getElementById("btn-no");

// Lista de mensajes para cuando el usuario presiona "No"
const messages = [
    "¿Segura? ¡Piénsalo bien!",
    "Vamos, ¡di que sí!",
    "¡No te rindas! ¡Elige sí!",
    "Boba, tú puedes hacerlo!",
    "¡Sé que quieres decir que sí!",
    "¿En serio vas a decir que no?",
    "¡No me decepciones! ¡Elige sí!",
    "¡Inténtalo de nuevo! ¡Tú puedes!",
    "¡No seas tímida! ¡Atrévete a decir que sí!",
    "¡Vamos, un clic no duele! ¡Elige sí!",
    "¡No me hagas sufrir! ¡Elige sí!",
    "Boba, el destino te está llamando! ¡Di que sí!",
    "¡No te arrepentirás! ¡Elige sí!",
    "¡Un clic puede cambiar todo! ¡Elige sí!",
    "¡No me dejes con la duda! ¡Elige sí!",
    "Boba, el universo quiere que digas que sí!",
    "¡No me hagas rogar! ¡Elige sí!",
    "¡Un sí sería el mejor regalo!",
    "¡No te quedes con las ganas! ¡Elige sí!",
    "Boba, este es tu momento! ¡Di que sí!"
];


const gifs = [
    "gif/snoppy abrazo.gif",
    "gif/snoopy bailarin.gif", 
    "gif/snoppy comiendo.gif", 
    "gif/snoppy echado.gif", 
    "gif/snoopy riendo.gif", 
    "gif/snoppy yoyo.gif"  
];

let attempt = 0; 


function updateContent() {
 
    message.textContent = messages[attempt % messages.length];
    gif.src = gifs[attempt % gifs.length];

    attempt++;
}


function launchConfetti() {
    
    
   
    confetti({
        particleCount: 100,
        angle: 60, 
        spread: 60,
        origin: { x: 0, y: 0.7 } 
    });

    confetti({
        particleCount: 100,
        angle: 120, 
        spread: 60,
        origin: { x: 1, y: 0.7 } 
    });

    
    setTimeout(launchConfetti, 1000);
}

btnYes.addEventListener("click", () => {

    mainContainer.innerHTML = `
        <div class="content">
            <h1>¡Sabía que ibas a aceptar!</h1>
            <!-- Nuevo GIF -->
            <div class="gif-container">
                <img src="gif/snoppy celebrando.gif" alt="Aceptar">
            </div>
        </div>
    `;

    launchConfetti();
});


btnNo.addEventListener("click", () => {
    updateContent(); 
});