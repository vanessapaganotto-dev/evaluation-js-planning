# Weekly Planner

## Description

This web application allows managing an interactive weekly planner.  
The days of the week (Monday to Friday) are displayed with their status (free or reserved).  
The user can modify statuses, calculate the number of reservations, reset, or randomly reserve days.


---

## Features

- Table displaying the days of the week (Monday to Friday)  
- Day status: free (green) or reserved (red)  
- Click on a cell to toggle between free/reserved  
- Calculate button: shows the number of free and reserved days  
- Reset button: sets all days to free  
- Random Reservation button: randomly reserves a given number of days


---

## Project Structure

- `index.html`: main HTML page  
- `script.js`: JavaScript script that creates the table and handles interactions


---

## Installation and Usage

- Clone or download the project  
- Open `index.html` in a modern browser  
- Interact with the planner by clicking on days or buttons

---

## Example JavaScript Code

```javascript
const planningJours = [
  { jour: "Lundi", statut: false },
  { jour: "Mardi", statut: false },
  { jour: "Mercredi", statut: false },
  { jour: "Jeudi", statut: false },
  { jour: "Vendredi", statut: false }
];

function genererTableau() {
  // Remove existing rows
  while (tableau.rows.length > 0) {
    tableau.deleteRow(0);
  }
  // Create rows with status handling
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
```

---

## Author

Vanessa PAGANOTTO 

---

## License

This project is licensed under the MIT License.
}
