const userName = prompt("Как вас зовут?")
const newParagraphHTML = 
    `<p class ="pp pink">Привет,  ${userName}!</p>`;
firstPar.insertAdjacentHTML('beforebegin', newParagraphHTML);
