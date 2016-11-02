var check_letter = function(user_choice, word) {

  var word_array = [];
  var secret_word_string = '';

  for (a = 0; a < word.length; a++) {

    word_array.push('_');

  }

  for (i = 0; i < word.length; i++) {

    if (word.charAt(i) === user_choice) {

      word_array[i] = user_choice;

    }

  }

  word_string = word_array.toString();

  word_string = word_string.replace(/,/g, '');

  return word_string;

}

exports.letter_check = check_letter;

console.log(check_letter("a", "abba"));
