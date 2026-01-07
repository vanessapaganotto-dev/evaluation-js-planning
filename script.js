document.body.style.fontFamily = "Arial, sans-serif";



// Tableau des jours
    const planningJours = [
      { jour: "Lundi", statut: false },
      { jour: "Mardi", statut: false },
      { jour: "Mercredi", statut: false },
      { jour: "Jeudi", statut: false },
      { jour: "Vendredi", statut: false }
    ];


    // Création du tableau et des boutons
    const app = document.getElementById("app");

    const tableau = document.createElement("table");
    tableau.id = "planning";
    tableau.border = "1";
    tableau.style.borderCollapse = "collapse";
    tableau.style.marginBottom = "10px";

    app.appendChild(tableau);


    // Création des boutons
    const btnCalculer = document.createElement("button");
    btnCalculer.textContent = "Calculer";

    const btnReinitialiser = document.createElement("button");
    btnReinitialiser.textContent = "Réinitialiser";

    const btnReservationAleatoire = document.createElement("button");
    btnReservationAleatoire.textContent = "Réservation aléatoire";

    app.appendChild(btnCalculer);
    app.appendChild(btnReinitialiser);
    app.appendChild(btnReservationAleatoire);


    tableau.style.width = "700px";

    btnCalculer.style.backgroundColor = "black";
    btnCalculer.style.color = "white";
    btnCalculer.style.margin = "10px";
    btnCalculer.style.padding = "10px 20px";
    btnCalculer.style.borderRadius = "8px";

    btnReinitialiser.style.backgroundColor = "black";
    btnReinitialiser.style.color = "white";
    btnReinitialiser.style.margin = "10px";
    btnReinitialiser.style.padding = "10px 20px";
    btnReinitialiser.style.borderRadius = "8px";

    btnReservationAleatoire.style.backgroundColor = "black";
    btnReservationAleatoire.style.color = "white";
    btnReservationAleatoire.style.margin = "10px";
    btnReservationAleatoire.style.padding = "10px 20px";
    btnReservationAleatoire.style.borderRadius = "8px";



    // Génère les lignes du tableau
    function genererTableau() {
        // Supprime toutes les lignes du tableau
      while (tableau.rows.length > 0) {
        tableau.deleteRow(0);
      }

        
    // Parcourt chaque jour dans planningJours pour créer une ligne dans le tableau
      for (const jour of planningJours) {
        const ligne = document.createElement("tr");

        const celluleJour = document.createElement("td");
        celluleJour.textContent = jour.jour;
        celluleJour.style.padding = "10px";
        celluleJour.style.width = "50%";
        celluleJour.style.textAlign = "center";

        const celluleStatut = document.createElement("td");
        celluleStatut.textContent = jour.statut ? "réservé" : "libre";
        celluleStatut.style.backgroundColor = jour.statut ? "red" : "green";
        celluleStatut.style.width = "50%";
        celluleStatut.style.textAlign = "center";

          
   // Ajoute un événement clic pour inverser le statut de réservation du jour
        celluleStatut.addEventListener("click", () => {
          jour.statut = !jour.statut;
          genererTableau(); // met à jour l'affichage
        });

        ligne.appendChild(celluleJour);
        ligne.appendChild(celluleStatut);
        tableau.appendChild(ligne);
      }
    }


    // Bouton "Calculer"
    btnCalculer.addEventListener("click", () => {
      const libres = planningJours.filter(j => !j.statut).length;
      const reserves = planningJours.length - libres;
      alert(`Créneaux libres : ${libres}\nCréneaux réservés : ${reserves}`);
    });


    // Bouton "Réinitialiser"
    btnReinitialiser.addEventListener("click", () => {
      for (const jour of planningJours) {
        jour.statut = false;
      }
      genererTableau();
    });


    // Bouton "Réservation aléatoire"
    btnReservationAleatoire.addEventListener("click", () => {
      let nombre = prompt("Combien de jours voulez-vous réserver ?");
      nombre = parseInt(nombre);

      if (isNaN(nombre) || nombre < 0 || nombre > planningJours.length) {
        alert("Nombre invalide !");
        return;
      }
        

      // Réinitialiser avant de réserver
      for (const jour of planningJours) {
        jour.statut = false;
      }
        

      // Réserver aléatoirement
      let joursRestants = nombre;
      while (joursRestants > 0) {
        const randomIndex = Math.floor(Math.random() * planningJours.length);
        if (!planningJours[randomIndex].statut) {
          planningJours[randomIndex].statut = true;
          joursRestants--;
        }
      }

      genererTableau();
    });

    // Génère le tableau au chargement de la page
    window.onload = genererTableau;