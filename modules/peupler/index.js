'use strick';

const peupler = require("./tableaux.js");
let tabPrenom = peupler.tabPrenom;
let tabNom = peupler.tabNom;
let tabCourriel = peupler.tabCourriel;
let tabCourrielExt = peupler.tabCourrielExt;
let tabCourrielSeparation = peupler.tabCourrielSeparation;
let tabTelephone = peupler.tabTelephone;

const peupler_Json = () => {
	let tabPersonnes = [];
	let tabUnePersonne = {};
	let position = 0;
	let nom;
	let prenom;
	let courriel;
	let courrielExt;
	let courrielSeparation;
	let ntelephone3;
	let ntelephone4;

	for(i=0 ; i<=1 ; i++){
		tabPersonnes = [];
		nom = "";
		prenom = "";
		courriel = "";
		courrielExt = "";
		courrielSepatation = "";
		telephone = "";
		ntelephone3 ="";
		ntelephone4 = "";
		tabNumero = ["0","1","2","3","4","5","6","7","8","9"];

		console.log();
		//prénom
		position = Math.floor(Math.random()*tabPrenom.length);
		prenom = tabPrenom[position];
		//tabPersonnes.push(prenom);

		//nom
		position = Math.floor(Math.random()*tabNom.length);
		nom = tabNom[position];
		//tabPersonnes.push(nom);

		//courriel
		position = Math.floor(Math.random()*tabCourriel.length);
		courriel = tabCourriel[position];


		position = Math.floor(Math.random()*tabCourrielSeparation.length);
		courrielSepatation =  tabCourrielSeparation[position];

		position = Math.floor(Math.random()*tabCourrielExt.length);
		courrielExt =  tabCourrielExt[position];

		//tabPersonnes.push(prenom+courrielSepatation+nom+courriel+courrielExt);

		//téléphone
		position = Math.floor(Math.random()*tabTelephone.length);
		telephone =  tabTelephone[position];

		for(i=0 ; i<3 ; i++){
			nb = Math.round(Math.random()*9);
			ntelephone3 += tabNumero[nb];
		}


		for(n=0 ; n<4 ; n++){
			nb = Math.round(Math.random()*9);
			ntelephone4 += tabNumero[nb];
		}


		
		//tabPersonnes.push("("+telephone+")"+"-"+ntelephone3+"-"+ntelephone4);
		//console.log(tabPersonnes);

		tabUnePersonne ={
			prenom:prenom,
			nom:nom,
			telephone:"("+telephone+")"+"-"+ntelephone3+"-"+ntelephone4,
			courriel:prenom+courrielSepatation+nom+courriel+courrielExt
		}

		console.log(tabUnePersonne);

		tabPersonnes.push(tabUnePersonne);

	}

	return tabUnePersonne;
}

module.exports = peupler_Json;