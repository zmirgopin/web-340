    /**
================================
Title: index.js
Author: Zahava Gopin 
Date: 17 January 2023
Description: index for sports-app
================================
*/

/**
 * Importing the modules from the team-manager.js file. 
 */

const getTeamsModule = require ('./team-manager');

/**
 * Display all of the teams. 
 */

let allOutput = getTeamsModule.getTeams();

//Displays the contents of the Team array

console.log('--DISPLAYING TEAMS--');
for (let Team of teams){
    console.log(getTeamsModule.displayTeam(Team));
}

/**
 * Display a single team. 
 */
let firstSingleTeam = getTeamsModule.getTeam('Patriots');

let secondSingleTeam = getTeamsModule.getTeam('Falcons');

console.log('--DISPLAYING A SINGLE TEAM--');
console.log(getTeamsModule.displayTeam(firstSingleTeam));

console.log('--DISPLAYING A SINGLE TEAM--');
console.log(getTeamsModule.displayTeam(secondSingleTeam));

