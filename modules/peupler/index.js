"use strick"

const tableau = require('./tableau')

const max = tableau.length;
console.log('max = ' + max);

const peupler_json = () => {

	let position;
	let tabVille = [];

	for(let k=0 ; k<10 k++){
		let position = Math.floor(Math.random()*max)
		tabVille.push(tableau[position])
	}

	return(tabVille);
}

module.exports = peupler_json;