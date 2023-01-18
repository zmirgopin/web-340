    /**
================================
Title: team.js
Author: Zahava Gopin 
Date: 17 January 2023
Description: JavaScript for sports-app
================================
*/

/**
 * Class with 3 properties initialized in a constructor.
 */

class Team {
    constructor (name, mascot, playerCount){
        this.name = name;
        this.mascot = mascot;
        this.playerCount = playerCount;
    }
}

module.exports = Team; 