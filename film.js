// Funkce pro zvýraznění určitého počtu hvězdiček
function zvyrazniHvezdicky(pocet) {
  // Získáme všechny prvky se třídou 'fa-star'
  const hvezdicky = document.querySelectorAll('.fa-star');

  // Projdeme všechny hvězdičky
  hvezdicky.forEach((hvezdicka, index) => {
    if (index < pocet) {
      // Pokud je index menší než počet, zvýrazníme hvězdičku
      hvezdicka.classList.remove('far'); // Odebereme nezvýrazněnou třídu
      hvezdicka.classList.add('fas'); // Přidáme zvýrazněnou třídu
    } else {
      // Jinak ji nezvýrazníme
      hvezdicka.classList.remove('fas'); // Odebereme zvýrazněnou třídu
      hvezdicka.classList.add('far'); // Přidáme nezvýrazněnou třídu
    }
  });
}

// Přidáme všem hvězdičkám posluchač události 'click'
document.querySelectorAll('.fa-star').forEach((hvezdicka, index) => {
  hvezdicka.addEventListener('click', () => {
    // Po kliknutí zavoláme funkci a předáme číslo kliknuté hvězdičky (index + 1)
    zvyrazniHvezdicky(index + 1);
  });
});

// Získáme prvek formuláře
const noteForm = document.querySelector('#note-form');

// Přidáme posluchač události pro odeslání formuláře
noteForm.addEventListener('submit', function(event) {
  // Zamezíme výchozímu chování formuláře (odešle se normálně)
  event.preventDefault();

  // Získáme hodnoty z formuláře
  const messageInput = document.querySelector('#message-input');
  const termsCheckbox = document.querySelector('#terms-checkbox');

  // Získáme element pro zobrazení poznámky
  const noteDisplay = document.querySelector('#note-display');

  // Resetujeme třídy "is-invalid"
  messageInput.classList.remove('is-invalid');
  termsCheckbox.classList.remove('is-invalid');

  // Pokud textové pole je prázdné, přidáme třídu "is-invalid"
  if (messageInput.value.trim() === '') {
    messageInput.classList.add('is-invalid');
    return; // Zastavíme vykonání kódu
  }

  // Pokud uživatel nezaškrtnul souhlas s podmínkami, přidáme třídu "is-invalid"
  if (!termsCheckbox.checked) {
    termsCheckbox.classList.add('is-invalid');
    return; // Zastavíme vykonání kódu
  }

  // Pokud je vše v pořádku, zobrazíme poznámku
  noteDisplay.innerHTML = `<p class="card-text">${messageInput.value}</p>`;

  // (Volitelně) Můžeme formulář vyprázdnit, pokud si přejeme, aby se po odeslání resetoval
  messageInput.value = '';
  termsCheckbox.checked = false;
});

// Získání prvku videa
const video = document.getElementById('film-video');
const prehravac = document.getElementById('prehravac');
const playButton = document.querySelector('.play');
const pauseButton = document.querySelector('.pause');
const currentTimeDisplay = document.querySelector('.current-time');

// Pokud existuje prvek s ID "prehravac", nastavíme posluchače pro přehrávání a pauzu
if (prehravac) {
  // Posluchač pro přehrávání
  playButton.addEventListener('click', () => {
    video.play();  // Pustíme video
  });

  // Posluchač pro pauzu
  pauseButton.addEventListener('click', () => {
    video.pause();  // Pozastavíme video
  });

  // Posluchač pro událost "playing"
  video.addEventListener('playing', () => {
    // Když video začíná hrát, přidáme třídu "playing"
    prehravac.classList.add('playing');
  });

  // Posluchač pro událost "pause"
  video.addEventListener('pause', () => {
    // Když video pauzuje, odstraníme třídu "playing"
    prehravac.classList.remove('playing');
  });

  // Posluchač pro zobrazení aktuálního času videa
  video.addEventListener('timeupdate', () => {
    const currentTime = Math.floor(video.currentTime);  // Získáme aktuální čas
    const minutes = Math.floor(currentTime / 60);  // Přepočítáme na minuty
    const seconds = currentTime % 60;  // Získáme sekundy
    currentTimeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' + seconds : seconds}`;  // Zobrazíme čas ve formátu MM:SS
  });
}
