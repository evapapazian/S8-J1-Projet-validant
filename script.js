/* Fonctionnalité 1: lorsque l'utilisateur clique sur le footer, on affiche "clic n° X" en console */

footer = document.querySelector("footer") /* On n'utilise pas de get by id parce qu'on n'a pas attribué d'id au footer dans le html, contrairement à l'exo chats sur khan */

footer.addEventListener("click", sayClick) /* Quand on clique sur le footer, ça lance la fonction sayCLick */

var i = 1 

function sayClick() {						// On a la fonctionnalité 1 (écrit "clique" dans la console quand on clique sur le footer) et la 1 bis (compte le nombre de clics)
	console.log("Clique")
	console.log(`clic n° ${i}`) 

	i = i + 1
}


// Fonctionnalité 2: si on clique sur le hamburger, la navbar perd sa classe collapse et est rajoutée à nouveau quand on reclique dessus


hamburger = document.querySelector("button.navbar-toggler");	/* On veut l'élément button de classe navbar-toggler */
console.log(hamburger);

hamburger.addEventListener("click", loseCollapse)

function loseCollapse(){
	   var navbarHeadEl = document.getElementById("navbarHeader");	/* le toggle permet d'enlever la classe collapse si elle est présente et de la rajouter si elle n'y est pas */
	   navbarHeadEl.classList.toggle("collapse")

} 


//Fonctionnalité 3: si on clique sur le bouton edit de la première carte, le texte se met en rouge
var card1 = document.getElementsByClassName("card")[0] ; /* On définit la variable card1, qui correspond au premier élément "card" dans le code (donc le 0) */
console.log(card1)

var edit = card1.getElementsByClassName("btn")[1];   /* On définit la variable edit, qui correspond au deuxième élément "btn" de la variable card 1 (donc le deuxième bouton de la première carte soit le bouton edit) */

console.log(edit)

function Red() {
 card1.style.color = 'red';							/* La fonction Red va changer la couleur de la police en rouge */
};

edit.addEventListener("click",Red);		 			/* On applique la fonction Red au bouton edit, quand on clique dessus */





//Fonctionnalité 4: Changer le texte de la 2ème carte en vert quand on clique dessus, et ramener à la couleur de base quand on clique à nouveau dessus 

var card2 = document.getElementsByClassName("card")[1] ; 	/* On reprend le même principe que précédemment pour définir les variables cartes */
console.log(card2)

var changeColor = card2.getElementsByClassName("btn")[1];	/* la variable changeColor correspond au deuxième bouton de la deuxième carte */

console.log(changeColor)

function Green() {

if (card2.style.color === 'green'){							/* On fait un petit if: si la couleur est verte, on la modifie en noir (retour au départ), sinon, on applique la couleur verte */
	card2.style.color = 'black'
}	
else {
 card2.style.color = 'green';
}
};

changeColor.addEventListener("click",Green);			/* On applique la fonction Green à la variable changeColor (deuxième bouton de la deuxième carte), qui changera le texte en vert qd on clique dessus */


// Fonctionnalité 5: si double clic sur la navbar, tout bootstrap disparait (vdm)

var navbar = document.querySelector("header")
console.log(navbar)

function bootstrap(){


var link = document.querySelector("link")
var href = link.getElementsByClassName("href")

if (link.href === "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"){

link.href = "";
}

else {
	link.href = "https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
}

}


navbar.addEventListener("dblclick", bootstrap)

