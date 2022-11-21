//clique 

const textFooter = document.querySelector("footer.text-muted");
var number = 1
function showClick (){
    console.log("clique" + number);
    number ++
    }
textFooter.addEventListener("click", showClick)

// Hamburger menu
const navbar = document.getElementById("navbarHeader"); // On va chercher l'id de la div où tout va se passer et on rentre ça dans une constant
var boutonMenu = document.querySelector(".navbar-toggler"); // Ici on récupère la classe ou le hamburger menu se trouve, le bouton hamburger.
function openMenu (){
    navbar.classList.toggle("collapse") // .toggle permet de mettre l'élément s'il n'existe pas et de l'enlever si il existe
};
boutonMenu.addEventListener("click", openMenu); // Avec addEventListener on fait dire qu'il se passe quelque chose lorsqu'on "click", ensuite on appel la function openMenu pour lui dire ce qu'il se passe.

//Bouton EDIT










