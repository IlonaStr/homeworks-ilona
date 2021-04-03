const { default: axios } = require("axios");

const list = document.querySelector('#list');
const actors = document.querySelector('#get-actors');
const planets = document.querySelector('#get-planets');
let page = 1;
actors.addEventListener("click", getActors);
planets.addEventListener("click", getPlanets);
function getPlanets() {
    getPlanetsPage(page)
}

function getActors() {
    let episodeNum = document.querySelector()
    axios.get(`https://swapi.dev/api/films/${episodeNum}/`)
}

function getPlanetsPage(num) {
    axios.get(`https://swapi.dev/api/planets/?page=${num}`)
    .then((res) => {
        list.innerHTML = `<h2 class="title">Planets</h2>`;
        for(let i = 0; i < res.data.results.length; i++) {
            const planet = document.createElement('div');
            planet.className = "planet"
            planet.innerHTML = `
            Name: ${res.data.results[i].name};
            Climate: ${res.data.results[i].climate};
            Diameter: ${res.data.results[i].diameter};
            `;
            list.appendChild(planet);
        }
        const next = document.createElement('input');
        const previous = document.createElement('input');

        next.id = 'next';
        next.className = 'pressed-button';
        back.id = 'previous';
        back.className = 'pressed-button';
        next.setAttribute('type', 'button');
        next.setAttribute('value', 'next');
        previous.setAttribute('type', 'button');
        previous.setAttribute('value', 'back');
        list.appendChild(previous);
        list.appendChild(next);

        next.addEventListener('click', function() {
            page++;
            if(page === 7)
            page = 1
            getPlanetsPage(page)
        });
        back.addEventListener('click', function() {
            page--;
            if(page === 0)
            page = 6
            getPlanetsPage(page)
        })
    })
}