let count = 1;
document.getElementById("radio1").checked = true;

setInterval(function () {
    nextImage();
}, 5000);

function nextImage() {
    count++;
    if (count > 4) {
      count = 1;
    }

    document.getElementById("radio" + count).checked = true;
}

// Imagem inicial redirecionando para estoque
const mostra = document.querySelector('.mostrar');
const imginicial = document.querySelector('.img_inicial');

imginicial.addEventListener('mouseenter', entrar);
imginicial.addEventListener('mouseout', sair);
mostra.addEventListener('mouseenter', entra);
mostra.addEventListener('mouseout', sai);

function entrar() {
    mostra.style.display = 'block';
    imginicial.style.filter = 'brightness(50%)';
    imginicial.style.margin = '0';
    imginicial.style.width = '100%';
}

function sair() {
    mostra.style.display = 'none';
    imginicial.style.filter = 'brightness(100%)';
    imginicial.style.margin = '1%';
    imginicial.style.width = '98%';
}

function entra() {
    mostra.style.display = 'block';
    imginicial.style.filter = 'brightness(50%)';
    imginicial.style.margin = '0';
    imginicial.style.width = '100%';
    mostra.style.textDecoration = 'underline';
}

function sai() {
    mostra.style.display = 'none';
    imginicial.style.filter = 'brightness(100%)';
    imginicial.style.margin = '1%';
    imginicial.style.width = '98%';
    mostra.style.textDecoration = 'none';
}