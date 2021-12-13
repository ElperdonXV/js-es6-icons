//Milestone 1
//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.
//Milestone 2
//Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
//Milestone 3
//Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone(animal, vegetable, user).
//Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.

const all = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];
const container = document.querySelector(".content");
let filter = document.getElementById('filter');

let animali = all.filter((element) => {
	return element.type == "animal";
});
let verdure = all.filter((element) => {
	return element.type == "vegetable";
});
let utenti = all.filter((element) => {
	return element.type == "user";
});


for(let i=0; i<all.length; i++){
	container.innerHTML += makeBox(all[i]);
}
	
filter.addEventListener('change', function(){
	if( filter.value == 'All' ){
		//container.innerHTML = '';
		container.innerHTML += makeBox(all);
	}
});


function makeBox(element) {
	const card = `
        <div class="box">
			<div class="icons">
				<i class="${element.family} ${element.prefix}${element.name}" style="color:${element.color}"></i>
				<h2>${element.name}</h2>
			</div>
        </div>
        `;
	return card;
}