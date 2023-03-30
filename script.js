const carre = document.createElement("div");
carre.classList.add("carre");
const cadre = document.querySelector("#cadre");

// fonction de création aléatoire d'une couleur:
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;

}

let mesDivs = []
let count = 0;



document.addEventListener("keydown", function (event) {

  if (event.key == "ArrowDown" && count <= 224) {
    
    let newCarre = carre.cloneNode();
    newCarre.classList.add(count);
    newCarre.style.backgroundColor = getRandomColor(); //ajoute un numéro à la div carré
    mesDivs[count] = newCarre;
    cadre.appendChild(mesDivs[count]);
    count++;
    newCarre.addEventListener("click", (e) => {
      if (mesDivs.length >= 225) {
        newCarre.style.backgroundColor = "#000000";
      }
    })
    // console.log(mesDivs);
    console.log(count);
    // console.log(cadre);
  }
  else if (event.key == "ArrowUp" && count >= 0) {

    cadre.removeChild(mesDivs.pop());
    count--;
  }

});
