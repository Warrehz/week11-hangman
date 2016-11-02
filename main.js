var game = require('./game.js');
var inquirer = require('inquirer');

var letter_guess = '';

var start_hangman = function() {

  inquirer.prompt([

    {
      type: 'input',
      message: 'What letter would you like to guess?',
      name: 'letter'
    }

  ]).then(function (user) {

    letter_guess = user.letter;

    console.log(letter_guess);

  })

};

start_hangman();
