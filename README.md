# JavaScript Parser & Evaluator

A modern web application that parses, analyzes, and evaluates JavaScript code. Built with React and Esprima, this tool provides a visual representation of the lexical analysis and abstract syntax tree (AST) of JavaScript code.

## Features

- **Code Parsing**: Convert JavaScript code into tokens and AST
- **Code Evaluation**: Execute JavaScript code and see the results
- **File Upload**: Upload JavaScript files for analysis
- **Responsive Design**: Works on desktop and mobile devices
- **Modern UI**: Clean, professional interface with dark theme

## Technology Stack

- **React**: Frontend UI library
- **Esprima**: JavaScript parser
- **CSS3**: Styling with modern features (gradients, transitions, etc.)
- **Responsive Design**: Media queries for all device sizes

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Tanh1ro/js-parser-app.git
   cd js-parser-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## Usage

1. Enter JavaScript code in the text area or upload a JavaScript file
2. Click "Parse & Execute" button
3. View the tokens, AST, and execution results

### Example Input

```javascript
const x = 2 + 3;
x * 4;
```

### Output Sections

- **Tokens**: The lexical tokens that make up your code
- **AST**: The abstract syntax tree representation of your code
- **Execution Result**: The result of executing your code

## Sample Files

The project includes several sample JavaScript files that demonstrate different language features:

### Basic Expressions (`samples/basic-expressions.js`)
- Variables, arithmetic operations
- String operations and template literals
- Simple expressions and their evaluations

### Conditionals and Loops (`samples/conditionals-loops.js`)
- If-else statements and ternary operators
- Switch statements
- For, while, and for...of loops

### Functions and Objects (`samples/functions-objects.js`)
- Function declarations and arrow functions
- Object literals with methods
- Classes and inheritance
- Array methods with callbacks

### Asynchronous Code (`samples/async-code.js`)
- Promises and promise chaining
- Async/await syntax
- Promise.all and Promise.race

### Complex AST Example (`samples/complex-ast.js`)
- Class inheritance with generators
- Closures and higher-order functions
- Complex object structures
- Advanced array manipulations
- Immediately Invoked Function Expressions (IIFE)

## Code Architecture

The application is structured as follows:

- `src/App.js`: Main application component
- `src/App.css`: Styling for the application
- Public assets: Fonts, icons, and other static resources

## Security Considerations

This application uses JavaScript's `Function` constructor to evaluate code, which is similar to `eval()`. This approach is used for educational purposes. In a production environment, consider using a more secure solution for code evaluation.

## Future Enhancements

- Syntax highlighting for input code
- Visual AST representation (tree view)
- Code transformation features
- Multiple theme options
- Save/export analysis results

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Esprima](https://esprima.org/) - JavaScript parser used for tokenization and AST generation
- [React](https://reactjs.org/) - UI library used for building the interface
- [Create React App](https://create-react-app.dev/) - Used to bootstrap the application
