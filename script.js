let formulaire = document.getElementById("formulaire");
let listeEtudiants = document.getElementById("listeEtudiants");

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;

    let ligne = document.createElement("tr");

    ligne.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${age}</td>
        <td>
            <button>Modifier</button>
            <button>Supprimer</button>
        </td>
    `;

    listeEtudiants.appendChild(ligne);

    formulaire.reset();
});

formulaire.addEventListener("submit", function(event) {

    event.preventDefault();

    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let age = document.getElementById("age").value;

    let ligne = document.createElement("tr");

    ligne.innerHTML = `
        <td>${nom}</td>
        <td>${prenom}</td>
        <td>${age}</td>
        <td>
            <button class="modifier">Modifier</button>
            <button class="supprimer">Supprimer</button>
        </td>
    `;

    listeEtudiants.appendChild(ligne);

    formulaire.reset();

    ligne.querySelector(".supprimer").addEventListener("click", function() {
        ligne.remove();
    });

    ligne.querySelector(".modifier").addEventListener("click", function() {

        document.getElementById("nom").value = ligne.children[0].textContent;
        document.getElementById("prenom").value = ligne.children[1].textContent;
        document.getElementById("age").value = ligne.children[2].textContent;

        ligne.remove();
    });
});
let recherche = document.getElementById("recherche");

recherche.addEventListener("input", function() {

    let texte = recherche.value.toLowerCase();
    let lignes = listeEtudiants.getElementsByTagName("tr");

    for (let i = 0; i < lignes.length; i++) {

        let nom = lignes[i].children[0].textContent.toLowerCase();
        let prenom = lignes[i].children[1].textContent.toLowerCase();

        if (nom.includes(texte) || prenom.includes(texte)) {
            lignes[i].style.display = "";
        } else {
            lignes[i].style.display = "none";
        }
    }
});