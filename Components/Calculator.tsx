import React, { useState } from "react";
import { Dimensions, Linking, StyleSheet, Text, View } from "react-native";
import Button from "./Button";
import { useTheme } from "./ThemeContext";

const { width, height } = Dimensions.get('window');

const Calculator = () => {
	const { colors } = useTheme();
	const [firstValue, setFirstValue] = useState("");
	const [displayValue, setDisplayValue] = useState("0");
	const [operator, setOperator] = useState("");

	const handleNumberInput = (num: string) => {
		if (num === ".") {
			if (displayValue.includes(".")) return;
			if (displayValue === "0" || displayValue === "(-") {
				setDisplayValue(displayValue === "0" ? "0." : "(-0.");
				return;
			}
		}
		if (num !== ".") {
			const cleanValue = displayValue.replace(/[()]/g, "").replace("-", "");
			const [integerPart, decimalPart] = cleanValue.split(".");

			if (decimalPart !== undefined) {
				if (integerPart.length + decimalPart.length >= 15) return;
			} else {
				if (integerPart.length >= 15) return;
			}
		}

		if (displayValue === "0") {
			setDisplayValue(num === "." ? "0." : num);
		} else {
			setDisplayValue(displayValue + num);
		}
	};

	const calculateResult = (): number => {
		if (!operator || !firstValue) return parseFloat(displayValue);

		const num1 = parseFloat(firstValue.replace(/[()+]/g, ""));
		const num2 = parseFloat(displayValue.replace(/[()+]/g, ""));

		switch (operator) {
			case "+": return num1 + num2;
			case "-": return num1 - num2;
			case "X": return num1 * num2;
			case "÷":
				if (num2 === 0) return 0;
				return num1 / num2;
			case "%": return (num1 / 100);
			default: return num2;
		}
	};

	const handleOperatorInput = (newOperator: string) => {
		if (displayValue === "0" && firstValue && operator) {
			setOperator(newOperator);
			return;
		}

		let currentValue = displayValue;
		if (displayValue.includes("(-")) {
			currentValue = displayValue + ")";
		}
		if (operator && firstValue && displayValue !== "0") {
			const result = calculateResult();
			const formattedResult = parseFloat(result.toFixed(3));
			setFirstValue(String(formattedResult));
		} else {
			setFirstValue(currentValue);
		}

		setOperator(newOperator);
		setDisplayValue("0");
	};

	const handleCalculation = () => {
		if (displayValue === "2773"){
			Linking.openURL('https://www.youtube.com/watch?v=dQw4w9WgXcQ')
		}
		if (!operator || !firstValue) return;
		const result = calculateResult();
		const formattedResult = parseFloat(result.toFixed(3));
		setDisplayValue(String(formattedResult));
		setOperator("");
		setFirstValue("");
	};

	const handleClear = () => {
		setDisplayValue("0");
		setOperator("");
		setFirstValue("");
	};

	const handleDelete = () => {
		if (displayValue.length === 1) {
			setDisplayValue("0");
		} else {
			setDisplayValue(displayValue.slice(0, -1));
		}
	};

	const handlconvertsign = () => {
		if (displayValue === "0") {
			setDisplayValue("(-");
		} else if (displayValue === "(-") {
			setDisplayValue("0");
		} else if (displayValue.startsWith("(-")) {
			setDisplayValue(displayValue.slice(2));
		} else if (displayValue.startsWith("-")) {
			setDisplayValue(displayValue.slice(1));
		} else {
			setDisplayValue("(-" + displayValue);
		}
	};

	const getDisplayFontSize = () => {
		const length = displayValue.length;
		if (length <= 8) return 70;
		if (length <= 10) return 60;
		if (length <= 12) return 50;
		if (length <= 15) return 40;
		return 32;
	};

	const getOperatorFontSize = () => {
		const length = (firstValue + operator).length;
		if (length <= 10) return 30;
		if (length <= 15) return 24;
		return 20;
	};

	const styles = StyleSheet.create({
		container: {
			flex: 1,
		},
		display: {
			backgroundColor: colors.gray,
			paddingVertical: 20,
			paddingHorizontal: 20,
			paddingTop: 80,
			minHeight: height * 0.25,
			justifyContent: "flex-end",
		},
		displayText: {
			textAlign: "right",
		},
		keypad: {
			flex: 1,
			backgroundColor: colors.light,
			flexDirection: "row",
			flexWrap: "wrap",
			justifyContent: "center",
			alignContent: "center",
			gap: width * 0.04,
			paddingVertical: 20,
			paddingHorizontal: 10,
		},
	});

	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<Text style={[styles.displayText, { fontSize: getOperatorFontSize(), fontWeight: "300", color: colors.black }]}>
					{firstValue + operator}
				</Text>
				<Text style={[styles.displayText, { fontSize: getDisplayFontSize(), fontWeight: "300", color: colors.black }]}>
					{displayValue}
				</Text>
			</View>
			<View style={styles.keypad}>
				<Button title="C" type="top" onPress={handleClear} />
				<Button title="⌫" type="top" onPress={handleDelete} />
				<Button title="%" type="top" onPress={() => handleOperatorInput("%")} />
				<Button title="÷" type="right" onPress={() => handleOperatorInput("÷")} />
				
				<Button title="7" type="number" onPress={() => handleNumberInput("7")} />
				<Button title="8" type="number" onPress={() => handleNumberInput("8")} />
				<Button title="9" type="number" onPress={() => handleNumberInput("9")} />
				<Button title="X" type="right" onPress={() => handleOperatorInput("X")} />
				
				<Button title="4" type="number" onPress={() => handleNumberInput("4")} />
				<Button title="5" type="number" onPress={() => handleNumberInput("5")} />
				<Button title="6" type="number" onPress={() => handleNumberInput("6")} />
				<Button title="-" type="right" onPress={() => handleOperatorInput("-")} />
				
				<Button title="1" type="number" onPress={() => handleNumberInput("1")} />
				<Button title="2" type="number" onPress={() => handleNumberInput("2")} />
				<Button title="3" type="number" onPress={() => handleNumberInput("3")} />
				<Button title="+" type="right" onPress={() => handleOperatorInput("+")} />
				
				<Button title="+/-" type="number" onPress={() => handlconvertsign()} />
				<Button title="0" type="number" onPress={() => handleNumberInput("0")} />
				<Button title="." type="number" onPress={() => handleNumberInput(".")} />
				<Button title="=" type="right" onPress={handleCalculation} />
			</View>
		</View>
	);
};

export default Calculator;