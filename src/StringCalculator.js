import { useState } from "react";
import styles from "./styles.js";

const StringCalculator = () => {
	const [input, setInput] = useState("");
	const [result, setResult] = useState(null);
	const [error, setError] = useState(null);


	function escapeRegex(str) {
		return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
	}

	function add(numbers) {
		if (!numbers) return 0;

		let delimiter = /[,|\n.]/;

		numbers = numbers.replace(/\s/g, '').replace(/\\n/g, '\n')

		if (numbers.startsWith("//")) {
			const delimiterEnd = numbers.indexOf("\n");
			let customDelimiter = numbers.substring(2, delimiterEnd);
			delimiter = new RegExp(escapeRegex(customDelimiter), "g");
			numbers = numbers.substring(delimiterEnd + 1);
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
		<div style={styles.container}>
			<div
				style={styles.calculatorBox}
			>
				<h2>String Calculator</h2>
				<input
					type="text"
					value={input}
					onChange={(e) => setInput(e.target.value)}
					placeholder="Enter numbers..."
					style={styles.inputBox}
				/>
				<button onClick={handleCalculate}
					style={styles.calculateButton}
				>
					Calculate
				</button>
				{result !== null && <p style={styles.result}>Result: {result}</p>}
				{error && <p style={styles.error}>Error: {error}</p>}
			</div>
		</div>
	);
}

export default StringCalculator;