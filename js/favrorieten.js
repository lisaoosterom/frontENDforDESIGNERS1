console.log("test");
var filmTitel = document.querySelector('h3');
console.log(filmTitel);
var afbeeldingFilm = document.querySelector('article main');
console.log(afbeeldingFilm);

function hideShowTitel() {

    filmTitel.classList.toggle('filmTitelShow');

}

afbeeldingFilm.addEventListener("mouseover", hideShowTitel, false);
