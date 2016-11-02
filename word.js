var word_check = function(guessed_word, secret_word) {

  if (guessed_word == secret_word) {

    return true;

  } else {

    return false;

  }

};

exports.check = word_check;
