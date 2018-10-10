const axios = require('axios');

async function fetchCharacter() {
	let id = Math.ceil(Math.random() * 10);
	let {data} = await axios.get(`https://www.swapi.co/api/people/${id}`)
	return data;
}

async function fetchStarWarsCharacter() {
	let character1 = await fetchCharacter();
	let character2 = await fetchCharacter();
	await axios.post(`https://www.google.com`, {character1, character2})
	.catch(() => console.log("Shit be grim"));
	return {character1, character2};
}

fetchStarWarsCharacter().then((data) => {
	console.log('First character:', data.character1);
	console.log('Second character:', data.character2);
});