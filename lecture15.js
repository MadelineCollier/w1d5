// How 2 link files:



// secondary file, from which you want to invoke a function. this function is defined in a separate file, and so you need this:

// var countLetters = require('./countLetters.js');






// original file which features the function we want to access again in another file:


// YES:
// module.exports = countLetters;


// NO!!!!!:
// exports = countLetters;



