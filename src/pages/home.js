export const home = ()=> {
    const content = document.getElementById("content");

    const header1 = document.createElement("div");
    header1.textContent = "Welcome to our restaurant";

    const moreWords = document.createElement("div");
    moreWords.innerHTML = "this is more wokds about our beautiful restaurant that we have <br> here so feel free to look to your hearts content."

    content.appendChild(header1);
    content.appendChild(moreWords);

}