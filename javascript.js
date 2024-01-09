// In het begin VARIABELEN declareren, handig
let scorebord = document.querySelector("#scorebord");
let knopje = document.querySelector("#knop");
let naambord = document.querySelector("#naambord");
let score = 0;

// ADD EVENT LISTENER, in dit geval muisklik op..
knopje.addEventListener("click", function (e) {
	//NOTE: CSS class "plakken" op HTML element.
	// probeer ook classList.toggle !!!
	scorebord.classList.add("kantel");
	//NOTE: voorbeeld QUERYSELECTOR
	let namenvanger = document.querySelector("#namenvanger").value;
	naambord.textContent = namenvanger;
});

//NOTE: Wat is een FUNCTIE?
/* 
  ╔════════════════════════════════════════════════╗
  ║ Je kan in een EventListener code plaatsen      ║
  ║ die uitgevoerd moet worden, maar je kan ook    ║
  ║ elders in je pagina een ANDERE functie maken   ║
  ║ en dan verwijzen naar DIE andere functie,      ║
  ║ zoals hier onder. "veranderKleur" is een       ║
  ║ FUNCTIE die ELDERS in je code staat!           ║
  ╚════════════════════════════════════════════════╝
 */
scorebord.addEventListener("click", veranderKleur);

//NOTE: voorbeeld van een FUNCTIE
function veranderKleur() {
	score++;
	scorebord.textContent = `${score}`;
	console.log(score);

	//TODO: Oefening: functie aanpassen
	/* 
  ╔═══════════════════════════════════════════════════╗
  ║ Verander de functie "veranderKleur" zodanig dat   ║
  ║ NA dat het getal 10 is verschenen, de achtergrond ║
  ║ van de post_it oranje wordt, en de getallen       ║
  ║ daarin wit!                                       ║
  ╚═══════════════════════════════════════════════════╝
 */

	//NOTE: voorbeeld van een CONDITIONAL (IF-statement)
	if (score > 5) {
		scorebord.style.cssText = `background:orange;color:white`;
	}
}
