console.log(document)

/**
 * Mauvaise utilisation de querySelector. Cette méthode prend en paramètre un sélecteur CSS. Les sélecteurs passés à la méthode sont incorrects. Il n'y pas de balise larg-cara, small-cara ni cal1 en HTML
 * 
 * Rappel : Il existe plusieurs méthodes pour sélectionner des balises : getDocumentById, getDocumentsByClassName, querySelectorAll...
 * Détermine la méthode la mieux adaptée à ton cas
 */
var larg=document.querySelector("larg-cara")
var small= document.querySelector("small-cara")
var cal1=document.querySelector("cal1")

/**
 * Cette syntaxe n'est pas du tout correcte
 * Pour associer une fonction à un événement, il faut utiliser la méthode addEventListener
 */
cal1.onclick=function(E){
    larg.innerText="C"
}