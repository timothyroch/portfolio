const touches = document.querySelectorAll('.button');
const listeKeycode = Array.from(touches).map(touch => touch.dataset.key);
const ecran = document.querySelector('.ecran');
console.log(listeKeycode);

document.addEventListener('keydown', (e) => {
    const valeur = e.keyCode.toString();
    calculer(valeur);
    console.log(valeur, typeof valeur);
});

document.addEventListener('click', (e) => {
    const valeur = e.target.dataset.key;
    console.log(valeur, typeof valeur);
    calculer(valeur);
});

const calculer = (valeur) => {
    if (listeKeycode.includes(valeur)) {
        switch (valeur) {
            case '8':
                ecran.textContent = '';
                break;
            case '13':
                const calcul = eval(ecran.textContent);
                ecran.textContent = calcul.toString().slice(0, 16); // Limit to 12 characters
                break;
            default:
                const indexKeycode = listeKeycode.indexOf(valeur);
                const touche = touches[indexKeycode];
                if (ecran.textContent.length < 12) { // Prevent adding more than 12 characters
                    ecran.textContent += touche.innerHTML;
                }
        }
    }
};

window.addEventListener('error', (e) => alert('Une erreur est survenue dans votre calcul : ' + e.message));
