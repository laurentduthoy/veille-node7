'use strick';

const fs = require("fs");
const peupler = require("./modules/peupler")

fs.readFile("toto.txt", (err,resultat) => {
	if(err) consol.log(err)
	console.log(peupler())
})
