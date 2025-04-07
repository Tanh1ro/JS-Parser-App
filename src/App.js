import { useState } from "react";
import * as esprima from "esprima";
import "./App.css";

// Navbar Component
const Navbar = () => (
    <nav>
        <div className="container">
            JavaScript Parser & Evaluator
        </div>
    </nav>
);

// Footer Component
const Footer = () => (
    <footer>
        <div className="container">
            &copy; {new Date().getFullYear()} JS Parser App. All rights reserved.
        </div>
    </footer>
);

// React Component
export default function App() {
    const [input, setInput] = useState("const x = 2 + 3; x * 4;");
    const [tokens, setTokens] = useState([]);
    const [ast, setAst] = useState(null);
    const [result, setResult] = useState(null);

    const handleParse = () => {
        try {
            // Tokenize input
            const tokenized = esprima.tokenize(input, { loc: true });
            setTokens(tokenized);

            // Generate AST
            const parsedAst = esprima.parseScript(input);
            setAst(parsedAst);

            // Evaluate (Using eval for simplicity - use safer alternatives in production)
            const output = new Function("return " + input)();
            setResult(output);
        } catch (error) {
            setResult("Error: " + error.message);
        }
    };

    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => setInput(e.target.result);
            reader.readAsText(file);
        }
    };

    return (
        <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">
                <div className="container">
                    <div className="main-content">
                        <h2>JavaScript Code Parser</h2>
                        
                        <div className="space-y-6">
                            <div className="form-group">
                                <label htmlFor="code-input">Enter JavaScript Code</label>
                                <textarea
                                    id="code-input"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Enter JavaScript code"
                                />
                            </div>

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

                            <button onClick={handleParse}>
                                <span>Parse & Execute</span>
                            </button>

                            <div className="output-section">
                                <div className="form-group">
                                    <h3>Tokens</h3>
                                    <div className="output-box">
                                        <pre>{JSON.stringify(tokens, null, 2)}</pre>
                                    </div>
                                </div>

                                <div className="form-group">
                                    <h3>Abstract Syntax Tree (AST)</h3>
                                    <div className="output-box">
                                        <pre>{JSON.stringify(ast, null, 2)}</pre>
                                    </div>
                                </div>

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
