const url = "data.json";

async function fetchJSONData(url) {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Response not okay");
    }

    const data = await response.json();
    console.log(data);
    displayData(data);

  } catch (error) {
    console.log("error");
  }
}

fetchJSONData(url);

function displayData(data) {
  const container = document.getElementById("cakes");

  // Display cakes
  data.cakes.forEach(cake => {
    container.innerHTML += `
      <img src="${cakes}" alt="cake image" width="200">
    `;
  });

  // Burger text
  container.innerHTML += `<h2>${data.burgerText}</h2>`;

  // Display burgers
  data.burgers.forEach(burger => {
    container.innerHTML += `
      <img src="${burgers}" alt="burger image" width="200">
    `;
  });

  // Food text
  container.innerHTML += `<h2>${data.foodText}</h2>`;

  // Display foods
  data.foods.forEach(food => {
    container.innerHTML += `
      <img src="${foods}" alt="food image" width="200">
    `;
  });

  // Snacks text
  container.innerHTML += `<h2>${data.snacksText}</h2>`;

  // Display snacks
  data.snacks.forEach(snack => {
    container.innerHTML += `
      <img src="${snacks}" alt="snack image" width="200">
    `;
  });
}