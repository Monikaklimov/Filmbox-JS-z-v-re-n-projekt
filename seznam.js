const filmy = [
  {
    id: '123',
    nazev: 'Film 1',
    popis: 'Krátký popis filmu 1.',
    dlouhyPopis: 'Dlouhý popis filmu 1...',
    plakát: 'https://via.placeholder.com/780x520?text=Film+1'
  },
  {
    id: '124',
    nazev: 'Film 2',
    popis: 'Krátký popis filmu 2.',
    dlouhyPopis: 'Dlouhý popis filmu 2...',
    plakát: 'https://via.placeholder.com/780x520?text=Film+2'
  }
];

// Získání elementu pro seznam filmů
const seznamFilmu = document.querySelector('#seznam-filmu');

// Projdeme každý film a přidáme HTML kód
filmy.forEach(film => {
  const filmCard = document.createElement('div');
  filmCard.classList.add('col');
  filmCard.innerHTML = `
    <div class="card">
      <img src="${film.plakát}" width="780" height="520" class="card-img-top" alt="plakát" />
      <div class="card-body">
        <h5 class="card-title">${film.nazev}</h5>
        <p class="card-text">${film.popis}</p>
        <!-- Odkaz na detail filmu s ID -->
        <a href="film.html#${film.id}" class="btn btn-primary">Přehrát</a>
      </div>
    </div>
  `;
  // Přidáme karty do seznamu
  seznamFilmu.appendChild(filmCard);
});




