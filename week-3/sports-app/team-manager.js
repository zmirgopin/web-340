    /**
================================
Title: team-manager.js
Author: Zahava Gopin 
Date: 17 January 2023
Description: JavaScript for sports-app
================================
*/

/**
 * Importing the Team  module from team.js.
 */

const Team = require('./Team');

/**
 * Array of the team object.
 */

let teams = [
    new Team ('Patriots' , 'Pat Patriot', 53),
    new Team ('Falcons', 'Freddie Falcon', 52),
    new Team ('Panthers', 'Sir Purr', 53),
    new Team ('Vikings', 'Victor the Viking', 51),
    new Team ('Cowboys', 'Rowdy', 53 )
]

/**
 * 
 * Function to return the array of Team objects.
 */

module.exports.getTeams = function() {
    return teams;
}

/**
 * Function to return a single Team object from the teams array. 
 */

module.exports.getTeam = function(name){
    for (let Team of teams){
        if (Team.name === name){
            return Team
        }
    }
}



/**
 * Function to display the whole array. 
 */

module.exports.displayTeam = function(Team){
    return "   Name: " + Team.name + "\n   Mascot: " + Team.mascot + "\n   Player Count: " + Team.playerCount + "\n"; 
}
 