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
    list.innerHTML = `<h2 class="title">Actors<h2>`;
    for (let i = 0; i < actorsPage.length; i++) {
      axios.get(`https${actorsPage[i].substring(4)}`).then((result) => {
        const actor = document.createElement("li");
        actor.className = "actor";
        actor.innerHTML = `
                Name: ${result.data.name};<br>
                Year of birth: ${result.data.birth_year};<br>
                Gender: ${result.data.gender}<br>
                `;
        list.appendChild(actor);
      });
    }
});
}


  function getPlanetsPage(num) {
    list.innerHTML = `<h2 class="title">Planets</h2>`;
     axios.get(`https://swapi.dev/api/planets/?page=${num}`).then((res) => {
    for (let i = 0; i < res.data.results.length; i++) {
      const planet = document.createElement("li");
      planet.className = "planet";
      planet.innerHTML = `
            Name: ${res.data.results[i].name};
            Climate: ${res.data.results[i].climate};
            Diameter: ${res.data.results[i].diameter};
            `;
      list.appendChild(planet);
    }
    const next = document.createElement("input");
    const previous = document.createElement("input");

    next.id = "next";
    next.className = "pressed-button";
    previous.id = "previous";
    previous.className = "pressed-button";
    next.setAttribute("type", "button");
    next.setAttribute("value", "next");
    previous.setAttribute("type", "button");
    previous.setAttribute("value", "previous");
    list.appendChild(previous);
    list.appendChild(next);

    next.addEventListener("click", function () {
      page++;
      if (page === 7) page = 1;
      getPlanetsPage(page);
    });
    previous.addEventListener("click", function () {
      page--;
      if (page === 0) page = 6;
      getPlanetsPage(page);
    });
  });
}
