# evaluation-js-planning

Planning Hebdomadaire
Description

Ce projet est une application web simple permettant de gérer un planning hebdomadaire interactif.
L'utilisateur peut visualiser les jours de la semaine (du lundi au vendredi) avec leur statut (libre ou réservé),
et interagir avec le planning pour modifier les réservations.

Fonctionnalités

Affichage dynamique d’un tableau représentant les jours de la semaine (lundi à vendredi)

Statut des jours : libre (vert) ou réservé (rouge)

Clic sur une cellule de statut pour basculer entre réservé/libre

Bouton Calculer : affiche le nombre de jours libres et réservés

Bouton Réinitialiser : remet tous les jours à libre

Bouton Réservation aléatoire : réserve aléatoirement un nombre donné de jours

Interface stylée directement via JavaScript (polices, couleurs, marges…)

Structure du projet

index.html : page HTML principale, contient la structure basique et une div avec id app

script.js : script JavaScript qui génère dynamiquement le tableau, gère les événements et le style

(Optionnel) style.css : si souhaité, styles supplémentaires peuvent être ajoutés

Installation et utilisation

Copier les fichiers dans un dossier accessible via un serveur web ou ouvrir directement index.html dans un navigateur moderne.

La page affiche automatiquement le planning hebdomadaire avec boutons d’action.

Cliquer sur les cellules de statut pour changer l’état d’un jour (libre/réservé).

Utiliser les boutons pour calculer le nombre de réservations, réinitialiser ou faire une réservation aléatoire.

Exemple d’utilisation

Cliquer sur Réservation aléatoire et entrer un nombre pour réserver ce nombre de jours au hasard.

Cliquer sur Calculer pour afficher un résumé des jours libres et réservés.

Cliquer sur une case rouge ou verte dans le tableau pour basculer le statut.


Auteur

Vanessa PAGANOTTO (exemple)

Licence

Ce projet est sous licence MIT.
