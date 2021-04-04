const list = document.getElementById("list");
const actors = document.getElementById("get-actors");
actors.addEventListener("click", getActors);
const planets = document.getElementById("get-planets");
planets.addEventListener("click", getPlanets);
let page = 1;

function getPlanets() {
  getPlanetsPage(page);
}

function getActors() {
  axios.get(`https://swapi.dev/api/films/${2}/`).then((res) => {
    const actorsPage = res.data.characters;
    list.innerHTML = `<h2>Actors' list:<h2>`;
    for (let i = 0; i < actorsPage.length; i++) {
      axios.get(`https${actorsPage[i].substring(4)}`).then((result) => {
        const characterName = result.data.name;
        const characterBirth = result.data.birth_year;
        const characterGender = result.data.gender;
        list.insertAdjacentHTML(
          "beforeend",
          `<h3>Name: ${characterName}</h3>
            <h4>Birth date: ${characterBirth}</h4>
            <h4 class="gender">Gender: ${characterGender}</h4>`
        );
      });
    }
  });
}

function getPlanetsPage(num) {
  list.innerHTML = `<h2>Planets' list</h2>`;
  axios.get(`https://swapi.dev/api/planets/?page=${num}`).then((res) => {
    for (let i = 0; i < res.data.results.length; i++) {
      const planetName = res.data.results[i].name;
      const planetClimate = res.data.results[i].climate;
      const planetSize = res.data.results[i].diameter;
      list.insertAdjacentHTML(
        "beforeend",
        `<h3>Name: ${planetName}</h3>
            <h4>Climate: ${planetClimate}</h4>
            <h4 class="size">Size: ${planetSize}</h4>`
      );
    }
    const next = document.createElement("input");
    const previous = document.createElement("input");

    next.setAttribute("type", "button");
    next.setAttribute("value", "next");
    list.appendChild(next);

    previous.setAttribute("type", "button");
    previous.setAttribute("value", "previous");
    list.appendChild(previous);

    next.addEventListener("click", function () {
      page++;
      getPlanetsPage(page);
    });
    previous.addEventListener("click", function () {
      page--;
      getPlanetsPage(page);
    });
  });
}
