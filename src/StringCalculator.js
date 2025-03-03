import { useState } from "react";

const StringCalculator = () => {
    const [input, setInput] = useState("");
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    function escapeRegex(str) {
        return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    }

    function add(numbers) {
        if (!numbers) return 0;

        let delimiter = /,|\n/;
        numbers = numbers.replace(/\\n/g, '\n');

        if (numbers.startsWith("//")) {
            const delimiterEnd = numbers.indexOf("\n");

            let customDelimiter = numbers.substring(2, delimiterEnd);
            delimiter = new RegExp(escapeRegex(customDelimiter), "g");
            numbers = numbers.substring(delimiterEnd + 1);
            console.log(numbers, 'numbers')
        }

        const numArray = numbers.split(delimiter).map(Number);

        const negatives = numArray.filter(num => num < 0);
        if (negatives.length) {
            throw new Error(`Negative numbers not allowed: ${negatives.join(", ")}`);
        }

        return numArray.reduce((sum, num) => sum + num, 0);
    }

    const handleCalculate = () => {
        try {
            const sum = add(input);
            setResult(sum);
            setError(null);
        } catch (err) {
            setError(err.message);
            setResult(null);
        }
    };

    return (
        <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", height: "100vh" }}>
            <div style={{ padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0px 0px 10px rgba(0,0,0,0.1)", maxWidth: "400px", width: "100%" }}>
                <h2>String Calculator</h2>
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter numbers..."
                    style={{ width: "80%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
                />
                <button onClick={handleCalculate} style={{ width: "50%", padding: "10px", background: "blue", color: "white", border: "none", borderRadius: "4px", cursor: "pointer" }}>
                    Calculate
                </button>
                {result !== null && <p style={{ marginTop: "10px", color: "green" }}>Result: {result}</p>}
                {error && <p style={{ marginTop: "10px", color: "red" }}>Error: {error}</p>}
            </div>
        </div>
    );
}

export default StringCalculator;