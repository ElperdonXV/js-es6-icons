

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


for (let i = 0; i < all.length; i++) {
    container.innerHTML += makeBox(all[i]);
}

filter.addEventListener('change', function () {
    if (filter.value == 'all') {
        container.innerHTML = '';
        all.forEach((element) => {
            container.innerHTML += makeBox(element);
        });
    }
    else if (filter.value == 'animal') {
        container.innerHTML = '';
        animali.forEach((element) => {
            container.innerHTML += makeBox(element);
        });
    }
    else if (filter.value == 'vegetable') {
        container.innerHTML = '';
        verdure.forEach((element) => {
            container.innerHTML += makeBox(element);
        });
    }
    else if (filter.value == 'user') {
        container.innerHTML = '';
        utenti.forEach((element) => {
            container.innerHTML += makeBox(element);
        });
    }
});


function makeBox(element) {
    const card = `
        <div class="box">
			<div class="icons">
				<i class="${element.family} ${element.prefix}${element.name}" style="color:${randomColor()}"></i>
				<h2>${element.name}</h2>
			</div>
        </div>
        `;
    return card;
}

function randomColor(){
    let color = Math.floor(Math.random() * 16777215).toString(16);
    color = '#' + color;
    return color;
}
