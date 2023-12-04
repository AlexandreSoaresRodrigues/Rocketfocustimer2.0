document.querySelectorAll('[data-action^="toggle"]').forEach(function(button) {
    button.addEventListener('click', function() {
        var action = this.getAttribute('data-action');
        toggleSound(action);
    });
});

var currentAudio = null;

function toggleSound(action) {
    // Verifica se há um áudio em reprodução
    if (currentAudio && !currentAudio.paused) {
        // Pausa o áudio em reprodução
        currentAudio.pause();
        currentAudio = null;
        return;
    }

    // Cria um novo elemento de áudio
    var audio = new Audio();

    switch (action) {
        case 'toggleForest':
            audio.src = './assets/Floresta.wav';
            break;
        case 'toggleRain':
            audio.src = './assets/Chuva.wav';
            break;
        case 'toggleCoffeshopTimer':
            audio.src = './assets/Cafeteria.wav';
            break;
        case 'toggleFirePlace':
            audio.src = './assets/Lareira.wav';
            break;
        default:
            return;
    }

    // Reproduz o áudio
    audio.play();

    // Atualiza a referência ao áudio atual
    currentAudio = audio;

    // Adiciona um ouvinte para pausar o áudio quando ele terminar de tocar
    audio.addEventListener('ended', function() {
        currentAudio = null;
    });
}