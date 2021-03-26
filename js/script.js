var createPolitician = function(name, partyColor){
  var politician = {};
  politician.name = name;
  politician.electionResults = null;
  politician.totalVotes = 0;
  politician.partyColor = partyColor;

  return politician;
};
var jane = createPolitician("Jane Doesitall", [132,17,11]);
var betsy = createPolitician("Betsy Rocks", [245,141,136]);

//election results by state
jane.electionResults = [5, 1, 7, 2, 17, 6, 4, 2, 1, 1, 8, 3, 1, 11, 11, 0, 5, 3, 3, 3, 7, 4, 8, 9, 3, 7, 2, 2, 4, 2, 8, 3, 15, 15, 2, 12, 0, 4, 13, 1, 3, 2, 8, 11, 3, 2, 11, 1, 3, 7, 2];
betsy.electionResults = [4, 2, 4, 4, 38, 3, 3, 1, 2, 28, 8, 1, 3, 9, 0, 6, 1, 5, 5, 1, 3, 7, 8, 1, 3, 3, 1, 3, 2, 2, 6, 2, 14, 0, 1, 6, 7, 3, 7, 3, 6, 1, 3, 27, 3, 1, 2, 11, 2, 3, 1];

//function: setting state results
var setStateResults = function(state) {
  theStates[state].winner = null;
  
  if (jane.electionResults[state] > betsy.electionResults[state]) {
    theStates[state].winner = "Jane Doesitall";
    theStates[state].winnerColor = jane.partyColor; 
  }
  else if (jane.electionResults[state] < betsy.electionResults[state]) {
    theStates[state].winner = "Betsy Rocks"; 
    theStates[state].winnerColor = betsy.partyColor; 
  }
    //table: state results
    var stateResultsTable = document.getElementById('stateResults');
    var header = stateResultsTable.children[0];
    var body = stateResultsTable.children[1]
    var stateName = header.children[0].children[0];
    var abbrev = header.children[0].children[1];

    var candidate1Name = body.children[0].children[0];
    var candidate2Name = body.children[1].children[0];

    var candidate1Results = body.children[0].children[1];
    var candidate2Results = body.children[1].children[1];

    var winnersName = body.children[2].children[1];

    stateName.innerText = theStates[state].nameFull
    abbrev.innerText = "(" +theStates[state].nameAbbrev + ")";

    candidate1Name.innerText = jane.name;
    candidate2Name.innerText = betsy.name;

    candidate1Results.innerText = jane.electionResults[state];
    candidate2Results.innerText = betsy.electionResults[state];

    if (theStates[state].winner === null) {
        winnersName.innerText = "DRAW";
      }
      else {
        winnersName.innerText = theStates[state].winner;
      }
      //set state winner's color
      var stateColor = theStates[state].winnerColor;
        if (theStates[state].winner !== null) {
          theStates[state].rgbColor = stateColor;
        }
        else {
          theStates[state].rgbColor = [11,32,57];
        }
  };

// tallying the votes
jane.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
   
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  jane.tallyUpTotalVotes ();
 
betsy.tallyUpTotalVotes = function() {
    this.totalVotes = 0;
   
    for (var i = 0; i < this.electionResults.length; i++) {
      this.totalVotes = this.totalVotes + this.electionResults[i];
    }
  };
  betsy.tallyUpTotalVotes();

//declare a winner
var winner = function() {
  if (jane.totalVotes > betsy.totalVotes) {
     winner = jane.name;
     }
   else if (jane.totalVotes < betsy.totalVotes) {
     winner = betsy.name;
   }
   else {
     winner = "We have an unprecedented tie!"
   }
  };
winner();

// table: country results
var countryResultsTable = document.getElementById('countryResults');
var row = countryResultsTable.children[0].children[0];
row.children[0].innerText = jane.name;
row.children[1].innerText = jane.totalVotes;
row.children[2].innerText = betsy.name; 
row.children[3].innerText = betsy.totalVotes;
row.children[5].innerText = winner;
