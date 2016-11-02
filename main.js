// necessary dependencies
var game = require('./game.js');
var inquirer = require('inquirer');
var word = require('./word.js');
var letter = require('./letter.js');

// initial variables
var letter_guess = '';
var guess_array = [];
var hangman_word = game.word;
var hangman_word_array = [];
var hidden_hangman_word = '';
var hidden_hangman_word_array = [];
var hidden_guessed_word = '';
var guesses = 5 + (Math.floor(hangman_word.length / 3));

//loop to push characters into array for checking index and replacing since strings are immutable
for (a = 0; a < hangman_word.length; a++) {

  hidden_hangman_word += '-';
  hangman_word_array.push(hangman_word.charAt(a));
  hidden_hangman_word_array.push('-');

}

console.log('The Hidden Word: ' + hidden_hangman_word + '\n');

//get user guess from node console
var ask = function() {

  inquirer.prompt([

    {
      type: 'input',
      message: 'What letter would you like to guess?',
      name: 'letter'
    }

  ]).then(function (user) {

    letter_guess = user.letter;

//check if the entire word has been guessed
    if (word.check(hidden_guessed_word, hangman_word)) {

      console.log('You guessed it!');

    }

    else if (guesses > 0) {

//check if the letter guessed is in the word and update word shown in console if necessary
      letter.check(letter_guess, hangman_word_array, hidden_hangman_word_array);

      hidden_guessed_word = hidden_hangman_word_array.toString();

      hidden_guessed_word = hidden_guessed_word.replace(/,/g, '');

      console.log('-------------------------------------------\nNice Job!\n' +  '\nThe Hidden Word: ' + hidden_guessed_word + '\n-------------------------------------------');

      guesses--;

      ask();

    } else {

      console.log('-------------------------------------------\nYou have run out of guesses. You lose.\n-------------------------------------------');

    }

  })

}

ask();
