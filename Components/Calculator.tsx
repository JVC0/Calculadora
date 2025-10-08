import { Colors } from "@/utils/Colors";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Button from "./Button";
const Calculator = () => {
	const [firstValue, setFirstValue] = useState("");
	const [displayValue, setDisplayValue] = useState("0");
	const [operator, setOperator] = useState("");

	const handleNumberInput = (num: string) => {
		if (displayValue === "0") {
			setDisplayValue(num);
		} else {
			setDisplayValue(displayValue + num);
		}
	};
	const handleOperatorInput = (operator: string) => {
		setOperator(operator);
		if (displayValue.includes("(-")) {
			setFirstValue(displayValue + ")");
		} else {
			setFirstValue(displayValue);
		}
		setDisplayValue("0");
	};
	const handleCalculation = () => {
		const num1 = parseFloat(firstValue.replace(/[()+]/g, ""));
		const num2 = parseFloat(displayValue.replace(/[()+]/g, ""));
		if (operator === "+") {
			setDisplayValue((num1 + num2).toString());
		} else if (operator === "-") {
			setDisplayValue((num1 - num2).toString());
		} else if (operator === "X") {
			setDisplayValue((num1 * num2).toString());
		} else if (operator === "÷") {
			setDisplayValue((num1 / num2).toString());
		} else if (operator === "%") {
			setDisplayValue(((num1 / 100) * num2).toString());
		}
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
	return (
		<View style={styles.container}>
			<View style={styles.display}>
				<Text style={{ fontSize: 30, fontWeight: "300" }}>{firstValue + operator}</Text>
				<Text style={{ fontSize: 70, fontWeight: "300" }}>{displayValue}</Text>
				<Button title="⌫" type="top" onPress={handleDelete} />
			</View>
			<View style={styles.keypad}>
				<Button title="C" type="top" onPress={handleClear} />
				<Button title="( )" type="top" />
				<Button title="%" type="top" onPress={() => handleOperatorInput("%")} />
				<Button title="÷" type="right" onPress={() => handleOperatorInput("/")} />
				<Button title="7" type="number" onPress={() => handleNumberInput("7")} />
				<Button title="8" type="number" onPress={() => handleNumberInput("8")} />
				<Button title="9" type="number" onPress={() => handleNumberInput("9")} />
				<Button title="X" type="right" onPress={() => handleOperatorInput("X")} />
				<Button title="6" type="number" onPress={() => handleNumberInput("6")} />
				<Button title="5" type="number" onPress={() => handleNumberInput("5")} />
				<Button title="4" type="number" onPress={() => handleNumberInput("4")} />
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

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	display: {
		flex: 1,
		backgroundColor: Colors.gray,
		paddingVertical: 20,
		paddingHorizontal: 40,
		alignItems: "flex-end",
		justifyContent: "flex-end",
	},
	keypad: {
		flex: 2,
		backgroundColor: Colors.light,
		flexDirection: "row",
		flexWrap: "wrap",
		justifyContent: "center",
		gap: 30,
		padding: 7,
	},
});
