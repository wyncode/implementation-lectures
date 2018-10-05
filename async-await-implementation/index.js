let serverString = 'https://peopleserver.now.sh/person';
let axios = require('axios');

let name = "";
let counter = 0;
async function hitServer () {
	let {data} = await axios.get(serverString).catch(err => console.log(err));
	console.log(++counter, data);
}