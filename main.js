// from http://www.ncausa.org/About-Coffee/Coffee-Roasts-Guide
const coffees = [
	{ id: 1, name: "Light City", roast: "light" },
	{ id: 2, name: "Half City", roast: "light" },
	{ id: 3, name: "Cinnamon", roast: "light" },
	{ id: 4, name: "City", roast: "medium" },
	{ id: 5, name: "American", roast: "medium" },
	{ id: 6, name: "Breakfast", roast: "medium" },
	{ id: 7, name: "High", roast: "dark" },
	{ id: 8, name: "Continental", roast: "dark" },
	{ id: 9, name: "New Orleans", roast: "dark" },
	{ id: 10, name: "European", roast: "dark" },
	{ id: 11, name: "Espresso", roast: "dark" },
	{ id: 12, name: "Viennese", roast: "dark" },
	{ id: 13, name: "Italian", roast: "dark" },
	{ id: 14, name: "French", roast: "dark" },
];

const createLightCoffeeElement = (coffee) => {
	let lightAccordion = document.createElement("li");
	lightAccordion.classList.add("accordion-body-light", "d-flex", "col-4")
	lightAccordion.innerHTML = `
					<img src="./images/light-roast-beans.webp">
                    ${coffee.name}
    `;
	return lightAccordion;
};

const createMediumCoffeeElement = (coffee) => {
	let mediumAccordion = document.createElement("li");
	mediumAccordion.classList.add("accordion-body-medium", "d-flex", "col-4")
	mediumAccordion.innerHTML = `
					<img src="./images/medium-bright-coffee-beans.jpg">
                    ${coffee.name}
    `;
	return mediumAccordion;
};

const createDarkCoffeeElement = (coffee) => {
	let darkAccordion = document.createElement("li");
	darkAccordion.classList.add("accordion-body-dark", "d-flex", "col-4")
	darkAccordion.innerHTML = `
					<img src="./images/dark-roast-beans.jpeg">
                    ${coffee.name}
    `;
	return darkAccordion;
};

const renderLightCoffees = (coffees, target) => {
	target.innerHTML = "";
		for (let i = 0; i < 3; i++) {
			const coffeeElement = createLightCoffeeElement(coffees[i]);
			target.appendChild(coffeeElement);
		}
};

const renderMediumCoffees = (coffees, target) => {
	target.innerHTML = "";
		for (let i = 3; i < 6; i++) {
			const coffeeElement = createMediumCoffeeElement(coffees[i]);
			target.appendChild(coffeeElement);
		}
};

const renderDarkCoffees = (coffees, target) => {
	target.innerHTML = "";
		for (let i = 6; i < coffees.length; i++) {
			const coffeeElement = createDarkCoffeeElement(coffees[i]);
			target.appendChild(coffeeElement);
		}
};


let todos = [];
const renderTodoElement = (todo) => {
	const listItem = document.createElement("li");
	listItem.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
	listItem.innerHTML = `
        <p class="m-0">${todo}</p>
        <button class="btn btn-danger" data-done>Remove</button>
    `;
	const deleteBtn = listItem.querySelector("button[data-done]");
	deleteBtn.addEventListener("click", (e) => {
		listItem.remove();
		const index = todos.indexOf(todo);
		if (index > -1) {
			todos.splice(index, 1);
		}
	});
	return listItem;
};
const updateTodos = (todos) => {
	document.querySelector("#to-do-list").innerHTML = "";
	const itemsFragment = document.createDocumentFragment();
	for (let todo of todos) {
		itemsFragment.appendChild(renderTodoElement(todo));
	}
	document.querySelector("#to-do-list").appendChild(itemsFragment);
};
const addTodo = (todo, todos) => {
	const userInput = document.querySelector("#to-do").value;
	todos.push(todo);
	updateTodos(todos);
	return todos;
};

const handleFilterEvents = (coffees) => {
	const searchForm = document.querySelector('#navSearch');
	const searchInput = document.querySelector('#search');
	searchForm.addEventListener('submit', e => {
		e.preventDefault();
		console.log('submit event');
		const searchValue = searchInput.value;
		const accordionItems = document.querySelectorAll('.accordion-item');
		for(let accordion of accordionItems) {
			console.log(accordion.textContent.toLowerCase());
			if (accordion.textContent.toLowerCase().includes(searchValue.toLowerCase()) && searchValue){
				accordion.querySelector('.accordion-collapse').classList.add('show');
			} else {
				accordion.querySelector('.accordion-collapse').classList.remove('show');
			}
		}
	});
};


(() => {
	const accordionBodyLight = document.querySelector("#light-roast");
	const roastLightSelection = document.querySelector("#roast-selection");
	renderLightCoffees(coffees, accordionBodyLight, roastLightSelection);


	const accordionBodyMedium = document.querySelector("#medium-roast");
	const roastMediumSelection = document.querySelector("#roast-selection");
	renderMediumCoffees(coffees, accordionBodyMedium, roastMediumSelection);

	const accordionBodyDark = document.querySelector("#dark-roast");
	const roastDarkSelection = document.querySelector("#roast-selection");
	renderDarkCoffees(coffees, accordionBodyDark, roastDarkSelection);

	updateTodos(todos);
	const addBtn = document.querySelector("button[data-add]");
	const userInput = document.querySelector("#to-do");
	addBtn.addEventListener("click", (e) => {
		e.preventDefault();
		todos = addTodo(userInput.value, todos);
	});

handleFilterEvents(coffees);



})();
