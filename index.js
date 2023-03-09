// alert("Salut JS");

/* Commenter
plusieurs
lignes... */

// Kamel Case
let maSuperVariable = "Hello";





// ** Les variables ** //

// var = vieux JavaScript, n'est plus utilisé aujourd'hui
var unTexte = "voici un texte";

// const = constante = type de variable qui ne peut être modifié
const prenom = "justine";

// let = la variable peut être modifiée
let unChiffre = 24;
unChiffre = 22;

// Utilisation des guillemets
let chaine = "je suis l'une des chaines de caractères";


let nouvelleChaine = "Chaine précédente : " + chaine;

let autreConcatenation = `Chaine précédente : ${chaine}. Voilà c'était le contenu`;





// ** Types de données ** //


let string = "Je suis une chaine de caractères";
let number = 24;
let boolean = false;

// Tableau : il y a des crochets []
let array = ["je", "suis", 47, true];

// Objet : accolades {}
let object = {
    prenom: "audrey",
    age: 33,
    ville: "Bordeaux"
}





// ** Les opérateurs ** //
console.log(4+5);
console.log(4-5);
console.log(4/5);
console.log(4*5);
console.log(4**5); // Puissance

// ** Opérateurs d'affectations ** //
let total = 0;
total = total + 1;
total++;
total += 5;




// ** Structures de controle ** //

let x = 2;
let y = 5;
console.log("Test si 2 > 5");
if (x > y) { 
    console.log("Yes");
} else {
    console.log("No");
}

if(x){
    console.log("X existe !");
}

// Essai avec des types differents
// === verifie avec le type
// == verifie sans le type
let a = 5;
let b = "5";
if(a===b){
    console.log("Yes");
} else{
    console.log("No");
}

//   || ou
//   && et

if(x < y || x > 1){
    console.log("YES");
}






// ** Fonctions ** //
