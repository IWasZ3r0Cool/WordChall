


# Wordchall: Battletech-Themed Wordle Game

Wordchall is a web-based implementation of a Wordle-like game with a twist - all words are themed around the Battletech universe. Players guess randomly selected 5-letter words related to Battletech within a limited number of attempts.

## Features

- Simple and intuitive user interface
- Immediate feedback on letter correctness (correct position, present in word, or not in word)
- Responsive design that works well on both desktop and mobile devices
- Battletech-themed words for an immersive gaming experience

## Getting Started

### Prerequisites

You'll need Node.js installed on your machine to run this project.

### Installation

1. Clone the repository:
   ```
   git clone https://github.com/yourusername/wordle-clone.git
   ```

2. Navigate to the project directory:
   ```
   cd wordle-clone
   ```

3. Start the server:
   ```
   node server.js
   ```

4. Open your browser and go to `http://localhost:53814` to play the game.

## How to Play

1. Enter a 5-letter Battletech-themed word in the input field.
2. Click "Guess" to submit your guess.
3. The letters will be color-coded based on their correctness:
   - Green: Letter is in the correct position
   - Yellow: Letter is present in the word but not in the correct position
   - Red: Letter is not in the word

4. Continue guessing until you either correctly guess the word or run out of attempts.

## Customization

You can customize the game by modifying the following files:

- `index.html`: Contains the HTML structure and basic styling for the game.
- `server.js`: Handles serving the web page and static files.
- The JavaScript code within `index.html` contains the game logic, including word selection and guess evaluation.

## Contributing

Contributions are welcome! Please feel free to submit a pull request with any improvements or bug fixes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

