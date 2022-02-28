/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/

let menu = ""; // Nav Menu String
let menuList;


let secCollection = document.querySelectorAll('section');
let navMenu = document.getElementById('navbar__list');
let mobileActive = document.querySelector('.active-mobile span');
/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



//Main function for Higlighting active menu and Section
function higlight() {

    // Get current scroll position
    let scrollY = window.pageYOffset;


    // Learned from Youtube
    // For all Sections we will check the height
    secCollection.forEach(current => {
        const secHeight = current.offsetHeight;
        const secTop = current.offsetTop - 100;
        sectionId = current.getAttribute("id");

        if (scrollY > secTop && scrollY <= secTop + secHeight) {
            document.querySelector(`.navbar__menu a[href*=${sectionId}]`).classList.add("active");
            document.querySelector(`#${sectionId}`).classList.add('active-sec');
            mobileActive.innerHTML = current.getAttribute('data-nav');
        } else {
            document.querySelector(`.navbar__menu a[href*=${sectionId}]`).classList.remove("active");
            document.querySelector(`#${sectionId}`).classList.remove('active-sec');
        }
    });
}



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/







// Add class 'active' to section when near top of viewport

window.addEventListener("scroll", higlight);

// Scroll to anchor ID using scrollTO event



/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu 

window.onload = function () {
    createNav().then( () => {
        for (let i = 0; i < secCollection.length; i++){
            scrollToSection(i+1);
        }
    });
    async function createNav() {
        for (let i = 0; i < secCollection.length; i++) {
            menu += `<li class="" id="${i+1}"><a href="#${secCollection.item(i).getAttribute('id')}">${secCollection.item(i).getAttribute('data-nav')} </a></li>`;
        }
        navMenu.innerHTML = menu;
        menuList = document.getElementsByName('id');
    }
}


// Scroll to section on link click
function scrollToSection(id){
        const element = document.getElementById(`${id}`);
        element.addEventListener('click', (event) => {
            event.preventDefault();
            const sec = document.getElementById(`section${id}`);
            sec.scrollIntoView({behavior: "smooth"});
        })
}
// Set sections as active


