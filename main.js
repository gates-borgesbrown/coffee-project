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
	lightAccordion.classList.add("accordion-body-light")
	lightAccordion.innerHTML = `
                    ${coffee.name}
    `;
	return lightAccordion;
};

const createMediumCoffeeElement = (coffee) => {
	let mediumAccordion = document.createElement("li");
	mediumAccordion.classList.add("accordion-body-medium")
	mediumAccordion.innerHTML = `
                    ${coffee.name}
    `;
	return mediumAccordion;
};

const createDarkCoffeeElement = (coffee) => {
	let darkAccordion = document.createElement("li");
	darkAccordion.classList.add("accordion-body-dark")
	darkAccordion.innerHTML = `
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

// const updateCoffees = (e, target, selection) => {
// 	e.preventDefault();
// 	const selectedRoast = selection.value;
// 	const filteredCoffees = coffees.filter((coffee) => coffee.roast === selectedRoast);
// 	renderCoffees(filteredCoffees, target);
// };
// const createListElement = (toDo) => {
// 	const listElement = document.createElement("li");
// 	listElement.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center")
// 	listElement.innerHTML = `
//         <p class="m-0">${toDo}</p>
//         <button class="btn btn-danger" data-done>Remove</button>
//     `;
// 	const doneBtn = listElement.querySelector("button[data-done]");
// 	doneBtn.addEventListener('click', e => {
// 		listElement.remove();
// 	});
// 	document.querySelector("#to-do-list").appendChild(listElement);
// };
//
// const updateList = toDos => {
// 	document.querySelector("#to-do-list").innerHTML = "";
// 	for (let toDo of toDos) {
// 		createListElement(toDo);
// 	}
// }
// const toDos = [];
// const userInput = document.querySelector('#to-do');
// const addBtn = document.querySelector('button#input');
// updateList();
// addBtn.addEventListener('click', e => {
// 	e.preventDefault();
// 	toDos.push(userInput.value);
// 	updateList(toDos);
// 	userInput.value = "";
// });



// IIFE
(() => {
	const accordionBodyLight = document.querySelector("#light-roast");
	// const submitButton = document.querySelector("#submit");
	const roastLightSelection = document.querySelector("#roast-selection");
	renderLightCoffees(coffees, accordionBodyLight, roastLightSelection);


	const accordionBodyMedium = document.querySelector("#medium-roast");
	const roastMediumSelection = document.querySelector("#roast-selection");
	renderMediumCoffees(coffees, accordionBodyMedium, roastMediumSelection);

	const accordionBodyDark = document.querySelector("#dark-roast");
	const roastDarkSelection = document.querySelector("#roast-selection");
	renderDarkCoffees(coffees, accordionBodyDark, roastDarkSelection);


	// submitButton.addEventListener("click", (e) => {
	// 	updateCoffees(e, accordionBody, roastSelection);
	// });
	(() => {
	const createListElement = (toDo) => {
		const listElement = document.createElement("li");
		listElement.classList.add("to-do-item", "list-group-item", "d-flex", "justify-content-between", "align-items-center")
		listElement.innerHTML = `
        <p class="m-0">${toDo}</p>
        <button class="btn btn-danger" data-done>Remove</button>
    `;
		const doneBtn = listElement.querySelector("button[data-done]");
		doneBtn.addEventListener('click', e => {
			listElement.remove();
		});
		document.querySelector("#to-do-list").appendChild(listElement);
	};

	const updateList = toDos => {
		document.querySelector("#to-do-list").innerHTML = "";
		for (let toDo of toDos) {
			createListElement(toDo);
		}
	}
	const toDos = [];
	const userInput = document.querySelector('#to-do');
	const addBtn = document.querySelector('button#input');
	updateList();
	addBtn.addEventListener('click', e => {
		e.preventDefault();
		toDos.push(userInput.value);
		updateList(toDos);
		userInput.value = "";
	});
	})();





})();
