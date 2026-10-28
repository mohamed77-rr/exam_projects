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