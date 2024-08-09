// Input interativo 
let off = document.getElementById('off'); // botão desativa o input
let on = document.getElementById('on'); // botão que ativa o input
let navegation = document.getElementById('navegation'); // tag nav de links
let input = document.getElementById('Input'); // campo do input
let toggleButton = document.getElementById('toggleButton'); // botão que alterna a pesquisa

toggleButton.addEventListener('click', function() {
    input.classList.toggle('visibleinput');
    input.classList.toggle('hiddenInput');
    navegation.classList.toggle('xarope');
    on.classList.toggle('hidden');
    off.classList.toggle('visible');
});

// Carrossel 
document.addEventListener('DOMContentLoaded', () => {
    const banners = document.querySelector('.banners');
    const horses = document.querySelectorAll('.horse');
    let index = 0;

    const showHorse = (n) => {
        index += n;
        if (index >= horses.length) {
            index = 0;
        } else if (index < 0) {
            index = horses.length - 1;
        }
        banners.style.transform = `translateX(${-index * 100}%)`;
    };

    setInterval(() => {
        showHorse(1);
    }, 9000);
});
