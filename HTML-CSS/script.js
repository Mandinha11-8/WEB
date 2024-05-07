const wrapper = document.querySelector('.wrapperLogin');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const btnPopup = document.querySelector('.btnLogin-popup');
const iconClose = document.querySelector('.icon-close');

console.log(registerLink)
console.log(loginLink)
console.log(btnPopup)
console.log(iconClose)

if(registerLink){
    registerLink.addEventListener('click', () => {
        wrapper.classList.add('active')
    })
}

if(loginLink){
    loginLink.addEventListener('click', () => {
        wrapper.classList.remove('active');
    })
}

if(btnPopup){
    btnPopup.addEventListener('click', () => {
        wrapper.classList.add('active-popup');
    })
}

if(iconClose){
    iconClose.addEventListener('click', () => {
        wrapper.classList.remove('active-popup');
    })
}

const profileButton = document.querySelector('.profileButton');
const popupProfile = document.querySelector('.popup-wrapper');
const wrapperPopupProfile = document.querySelector('.wrapperPopup');
const fundopretopopup = document.querySelector('.fundopreto-popup');

profileButton.addEventListener('click', () => {
    popupProfile.style.display = 'block';
})

wrapperPopupProfile.addEventListener('click', eventas => {
    const classNameOfClickedElement = eventas.target.classList[0];
    if (classNameOfClickedElement === 'popup-wrapper' || classNameOfClickedElement === 'closeProfilePopup' || classNameOfClickedElement === 'btnSettings' || classNameOfClickedElement === 'wrapper' || classNameOfClickedElement === 'undefined' || classNameOfClickedElement === 'fundopreto-popup') {
        popupProfile.style.display = 'none';
    }
})

function adicionarCarro(event) {
    event.preventDefault();

    // Obter os valores dos campos do formulário
    const carImage = document.getElementById("carImage").value;
    const carMake = document.getElementById("carMake").value;
    const carModel = document.getElementById("carModel").value;

    // Criar a div do carro
    const carDiv = document.createElement("div");
    carDiv.classList.add("car");

    // Criar a imagem do carro
    const carImg = document.createElement("img");
    carImg.src = carImage;
    carDiv.appendChild(carImg);

    // Criar os dados do carro
    const carData = document.createElement("p");
    carData.innerText = carMake + " " + carModel;
    carDiv.appendChild(carData);

    // Adicionar a div do carro ao catálogo
    const carCatalog = document.getElementById("carCatalog");
    carCatalog.appendChild(carDiv);

    // Limpar os campos do formulário
    document.getElementById("carImage").value = "";
    document.getElementById("carMake").value = "";
    document.getElementById("carModel").value = "";
}

// Adicionar um listener para o evento de submit do formulário
const carForm = document.getElementById("carForm");
carForm.addEventListener("submit", adicionarCarro);
const botaoaddcarro = document.querySelector('.add-button');

var i = 0;

botaoaddcarro.addEventListener('click', () => {
    if(i==0){
        carForm.style.display = 'flex';
        i++;
    } else {
        carForm.style.display = 'none';
        i--;
    }
})