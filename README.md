🇬🇧 Version anglaise disponible : [README_EN.md](README_EN.md)


# Planning Hebdomadaire

## Description

Cette application web permet de gérer un planning hebdomadaire interactif.  
Les jours de la semaine (du lundi au vendredi) sont affichés avec leur statut (libre ou réservé).  
L'utilisateur peut modifier les statuts, calculer le nombre de réservations, réinitialiser ou réserver aléatoirement.

---

## Fonctionnalités

- Tableau affichant les jours de la semaine (Lundi à Vendredi)  
- Statut des jours : **libre** (vert) ou **réservé** (rouge)  
- Clic sur une cellule pour basculer entre libre/réservé  
- Bouton **Calculer** : affiche le nombre de jours libres et réservés  
- Bouton **Réinitialiser** : remet tous les jours à libre  
- Bouton **Réservation aléatoire** : réserve aléatoirement un nombre donné de jours  

---

## Structure du projet

- `index.html` : page principale HTML  
- `script.js` : script JavaScript qui crée le tableau et gère les interactions  

---

## Installation et utilisation

1. Cloner ou télécharger le projet  
2. Ouvrir `index.html` dans un navigateur moderne  
3. Interagir avec le planning en cliquant sur les jours ou les boutons  

---

## Exemple de code JavaScript

```javascript
const planningJours = [
  { jour: "Lundi", statut: false },
  { jour: "Mardi", statut: false },
  { jour: "Mercredi", statut: false },
  { jour: "Jeudi", statut: false },
  { jour: "Vendredi", statut: false }
];

function genererTableau() {
  // Supprime les lignes existantes
  while (tableau.rows.length > 0) {
    tableau.deleteRow(0);
  }
  // Crée les lignes avec gestion des statuts
  for (const jour of planningJours) {
    const ligne = document.createElement("tr");
    // ...
    const celluleStatut = document.createElement("td");
    celluleStatut.textContent = jour.statut ? "réservé" : "libre";
    celluleStatut.style.backgroundColor = jour.statut ? "red" : "green";
    celluleStatut.addEventListener("click", () => {
      jour.statut = !jour.statut;
      genererTableau();
    });
    // ...
  }
}
```
---

### Auteur  
Vanessa PAGANOTTO (exemple)  

### Licence  
Ce projet est sous licence MIT.
