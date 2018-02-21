'use strick';

const peupler = require("./modules/peupler");
const tabPrenom;
const tabNom;
const tabCourriel;
const tabCourrielExt;
const tabCourrielSepatation;
const tabTelephone;

const peupler_Json = () => {
	let tabPersonnes = [];
	let tabUnePersonne = [];
	let position = 0;
	let nom;
	let prenom;
	let courriel;
	let courrielExt;
	let courrielSepatation;

	for(i=0 ; i<30 ; i++){
		tabPersonnes = [];
		nom = "";
		prenom = "";
		courriel = "";
		courrielExt = "";
		courrielSepatation = "";

		
		//prénom
		position = Math.floor(Math.random()*tabPrenom.length);
		prenom = tabPrenom[position];
		tabPersonnes.push(prenom);

		//nom
		position = Math.floor(Math.random()*tabNom.length);
		nom = tabNom[position];
		tabPersonnes.push(nom);

		//courriel
		position = Math.floor(Math.random()*tabCourriel.length);
		courriel = tabCourriel[position];

		position = Math.floor(Math.random()*tabCourrielSepatation.length);
		courrielSepatation =  tabCourrielSepatation[position];

		position = Math.floor(Math.random()*tabCourrielExt.length);
		courrielExt =  tabCourrielExt[position];

		tabPersonnes.push(prenom+courrielSepatation+nom+courriel+courrielExt;

		//téléphone
		position = Math.floor(Math.random()*tabTelephone.length);
		courrielExt =  tabCourrielExt[position];


		




	}

}

