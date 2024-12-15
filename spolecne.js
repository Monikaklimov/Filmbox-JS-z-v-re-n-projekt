// Získáme prvek pro tlačítko menu
const menuTlacitko = document.querySelector('#menu-tlacitko');

// Získáme prvek pro položky menu
const menuPolozky = document.querySelector('#menu-polozky');

// Přidáme posluchač události na kliknutí na tlačítko menu
menuTlacitko.addEventListener('click', function() {
  // Zkontrolujeme, jestli menu má třídu 'show'
  if (menuPolozky.classList.contains('show')) {
    // Pokud má, tak ji odebereme
    menuPolozky.classList.remove('show');
    // Změníme ikonu na hamburger
    menuTlacitko.innerHTML = '<i class="fas fa-bars"></i>';
  } else {
    // Pokud nemá, tak ji přidáme
    menuPolozky.classList.add('show');
    // Změníme ikonu na křížek
    menuTlacitko.innerHTML = '<i class="fas fa-xmark"></i>';
  }
});
