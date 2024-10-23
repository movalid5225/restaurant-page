import "./styles.css";
import {about} from './pages/about.js';
import {home} from './pages/home.js';
import {contact} from './pages/contact.js';
import {dishes} from './pages/dishes.js';


const clear = ()=>{
    const content = document.getElementById("content");
    while(content.firstChild){
        content.removeChild(content.firstChild);
    }

}

document.addEventListener('click', (event) => {
    if (event.target.matches('#about')) {
        clear();
        content.classList.add('about-page');  
        about();
    }

    if (event.target.matches('#home')) {
        clear();
        content.classList.add('home-page');  
        home();
    }

    if (event.target.matches('#contact')) {
        clear();
        content.classList.add('contact-page'); 
        contact();
    }

    if(event.target.matches("#dishes")){
        clear();
        content.classList.add('dishes-page'); 
        dishes();
    }
});