var check_letter = function(letter, word_array, hidden_word_array) {

  for (i = 0; i < word_array.length; i++) {

    if (letter == word_array[i]) {

      hidden_word_array[i] = letter;

    }

  }

  return hidden_word_array;

}

exports.check = check_letter;
