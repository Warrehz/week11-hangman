var Hangman = function(random_word) {

  this.chosen_word = random_word;
  this.hidden_array = [];
  this.hidden_word = '';
  this.check_word = function() {

    if (this.chosen_word == this.hidden_word) {

      return true;

    }

    return false;

  }

  for (i = 0; i < this.chosen_word.length; i++) {

    this.hidden_array.push('_');

  }

  this.hidden_word = this.hidden_array.toString();

  this.hidden_word = this.hidden_word.replace(/,/g, ' ');

}

exports.hangman = Hangman;
