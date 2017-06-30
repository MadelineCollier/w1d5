
function countLetters(input) {
  var letterIndices = {};

  for (var i = 0; i < input.length; i++) {
    var letter = input[i];
    if (letter === ' ') continue;
    if (letterIndices[letter] === undefined) letterIndices[letter] = [];
    letterIndices[letter].push(i);
  }
  return letterIndices;
}

// console.log(countLetters(givenString));

module.exports = countLetters;