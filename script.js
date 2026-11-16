
// Récupérer les éléments HTML
let prix = document.getElementById("prix");
let quantite = document.getElementById("quantite");
let bouton = document.getElementById("btnValider");
let resultat = document.getElementById("resultat");

// Ajouter un événement au bouton
bouton.addEventListener("click", function() {

    // Récupérer les valeurs et les convertir en nombres
    let p = Number(prix.value);
    let q = Number(quantite.value);

    // Vérifier les valeurs saisies
    if (prix.value === "" || quantite.value === "" || p < 0 || q < 1) {

        resultat.textContent = "Erreur : valeurs invalides !";
        console.error("Valeurs invalides !");

    } else {

        // Calculer le total initial
        let total = p * q;

        // Calculer la remise
        let remise = 0;

        if (total > 100) {
            remise = total * 10 / 100;
        }

        // Calculer le total final
        let totalFinal = total - remise;

        // Afficher les résultats
        resultat.innerHTML =
            "Total initial : " + total + " DT<br>" +
            "Remise : " + remise + " DT<br>" +
            "Total final : " + totalFinal + " DT";

        // Afficher dans la Console
        console.log("Prix :", p);
        console.log("Quantité :", q);
        console.log("Total initial :", total);
        console.log("Remise :", remise);
        console.log("Total final :", totalFinal);
    }
});

