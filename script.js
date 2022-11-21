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
const card = document.querySelector('div.col-md-4');
console.log(card);

const edit = document.getElementById("exemple");
console.log(edit);

var text = document.querySelector('p.card-text');
console.log(text);
//ici la function qui permet de mettre style=red au <p> donc <p style="red">
function textRed(){
    text.style.color = 'red'
console.log(text);
}
edit.addEventListener("click", textRed); // Methode quand on clique ça mets le texte en rouge grace à la function.

//Fonction 4
const edit2 = document.getElementsByClassName('btn btn-sm btn-outline-secondary')[1];
console.log(edit2);

const text2 = document.getElementsByClassName('card-text')[1];
console.log(text2);

function textGreen(){
    
    if (text2.style.color === ''){
    
        text2.style.color = 'green'
    }
    else {    
        text2.style.color = 'black' 
    } 
      
}
edit2.addEventListener("click", textGreen);

//Fonction 5

const navbar2 = document.getElementsByClassName('navbar navbar-dark bg-dark box-shadow')[0];
console.log(navbar2);
let Boostrap_sans = document.getElementsByTagName('link')[0];
let Boostrap_link = document.getElementsByTagName('link')[0]['href'];

let boostrap = true

function effacer (){
    if (boostrap == true){
        Boostrap_sans.href = ''
        boostrap = false
        alert("Boostrap c'est de la merde j'enlève")
    }else{
        Boostrap_sans = Boostrap_link
        boostrap = true
        alert("Y'a plus boostrap je remets ?")
    }
}

navbar2.addEventListener('dblclick', effacer)

