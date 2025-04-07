import { useState } from "react";
import * as esprima from "esprima";
import "./App.css";

// Navbar Component - Displays the application title
const Navbar = () => (
    <nav>
        <div className="container">
            JavaScript Parser & Evaluator
        </div>
    </nav>
);

// Footer Component - Displays copyright information
const Footer = () => (
    <footer>
        <div className="container">
            &copy; {new Date().getFullYear()} JS Parser App. All rights reserved.
        </div>
    </footer>
);

// Main React Component - Handles the core functionality of the application
export default function App() {
    // State variables to store user input and parsing results
    const [input, setInput] = useState("const x = 2 + 3; x * 4;"); // Default code snippet
    const [tokens, setTokens] = useState([]); // Stores lexical tokens
    const [ast, setAst] = useState(null); // Stores Abstract Syntax Tree
    const [result, setResult] = useState(null); // Stores execution result

    /**
     * Handles the parsing of input JavaScript code
     * 1. Tokenizes the input using esprima
     * 2. Generates an Abstract Syntax Tree
     * 3. Evaluates the code and displays the result
     */
    const handleParse = () => {
        try {
            // Tokenize input - breaks down code into lexical tokens
            const tokenized = esprima.tokenize(input, { loc: true });
            setTokens(tokenized);

            // Generate AST - create a structured representation of the code
            const parsedAst = esprima.parseScript(input);
            setAst(parsedAst);

            // Evaluate code (Note: Using Function constructor for evaluation - safer than eval)
            const output = new Function("return " + input)();
            setResult(output);
        } catch (error) {
            // Display error if parsing or execution fails
            setResult("Error: " + error.message);
        }
    };

    /**
     * Handles file uploads
     * Reads the contents of a JavaScript file and updates the input state
     */
    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setInput(e.target.result);
            reader.readAsText(file);
        }
    };

    // Render the user interface
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="container">
                    <div className="main-content">
                        <h2>JavaScript Code Parser</h2>
                        
                        <div className="space-y-6">
                            {/* Code input textarea */}
                            <div className="form-group">
                                <label htmlFor="code-input">Enter JavaScript Code</label>
                                <textarea
                                    id="code-input"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter JavaScript code"
                                />
                            </div>

                            {/* File upload section */}
                            <div className="form-group">
                                <label>Or Upload a JavaScript File</label>
                                <div className="file-upload">
                                    <input
                                        type="file"
                                        accept=".js"
                                        onChange={handleFileUpload}
                                    />
                                    <div className="file-upload-label">
                                        Click to upload or drag and drop
                                    </div>
                                </div>
                            </div>

                            {/* Parse button */}
                            <button onClick={handleParse}>
                                <span>Parse & Execute</span>
                            </button>

                            {/* Results display section */}
                            <div className="output-section">
                                {/* Tokens display */}
                                <div className="form-group">
                                    <h3>Tokens</h3>
                                    <div className="output-box">
                                        <pre>{JSON.stringify(tokens, null, 2)}</pre>
                                    </div>
                                </div>

                                {/* AST display */}
                                <div className="form-group">
                                    <h3>Abstract Syntax Tree (AST)</h3>
                                    <div className="output-box">
                                        <pre>{JSON.stringify(ast, null, 2)}</pre>
                                    </div>
                                </div>

                                {/* Execution result display */}
                                <div className="form-group">
                                    <h3>Execution Result</h3>
                                    <div className="output-box">
                                        <pre>{result}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
