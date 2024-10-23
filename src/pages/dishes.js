import dishImageSrc from '../images/dishes.jpg';

export const dishes = ()=> {

    const content = document.getElementById("content");

    const header1 = document.createElement("div");
    header1.textContent = "Our dishes!";

    const moreWords = document.createElement("div");
    moreWords.innerHTML = "this is more wokds about our beautiful restaurant that we have <br> here so feel free to look to your hearts content."

    const dishImage = document.createElement('img');
    dishImage.src = dishImageSrc;

    content.appendChild(dishImage);
    content.appendChild(header1);
    content.appendChild(moreWords);
}