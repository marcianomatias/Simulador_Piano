const pianoKeys = document.querySelectorAll('.piano-keys .key');
const volumeSlider = document.querySelector(".volume-slider input");
const keysCheck = document.querySelector(".keys-check input")

let mapedKeys = [];

// adicionando a música para cada item

let audio = new Audio("src/tunes/a.wav");
const playTune = (key) => {
    audio.src = (`/src/tunes/${key}.wav`);
    audio.play();

// criando uma classe 'active' no data-key para quando clicarmos com o teclado, fazer o mesmo efeito de click no html

    const clickedKey = document.querySelector(`[data-key="${key}"]`);
    clickedKey.classList.add("active");
    setTimeout(() => {
        clickedKey.classList.remove("active");
    }, 150);
};

// Para cada chave/tecla adicionar um som e colocar o valor dentro do mapedKeys

pianoKeys.forEach((key) => {
    key.addEventListener("click", () => playTune(key.dataset.key));
    mapedKeys.push(key.dataset.key);
});

// Depois de pegar os valores acima, adicinamos um evendo de tecla onde clicamos nas teclas guardadas no array acima incluindo a música

document.addEventListener("keydown", (e) => {
    if (mapedKeys.includes(e.key)){
    playTune(e.key)}
});

// Ajustando volume

const handleVolume = (e) => {
    audio.volume = e.target.value;
};
volumeSlider.addEventListener("input", handleVolume);

// criando uma classe para quando for clickado ocultar as letras no display

const showHideKeys = () => {
    pianoKeys.forEach(key => key.classList.toggle("hide"))
}
keysCheck.addEventListener("click", showHideKeys)