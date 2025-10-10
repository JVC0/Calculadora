import React from "react";
import { GestureResponderEvent, StyleSheet, Text, TouchableOpacity } from "react-native";
import { useTheme } from "./ThemeContext";

const Button = ({
	title,
	type,
	onPress,
}: {
	title: string;
	type: "top" | "right" | "number";
	onPress: (event: GestureResponderEvent) => void;
}) => {
	const { colors } = useTheme();

	return (
		<TouchableOpacity
			style={[
				styles.button,
				{
					backgroundColor:
						type === "top" ? colors.btnDark : type === "right" ? colors.btRight : colors.btnLight,
				},
			]}
			onPress={onPress}
		>
			<Text style={{ fontSize: 34, color: type === "number" ? colors.black : colors.white }}>
				{title}
			</Text>
		</TouchableOpacity>
	);
};

export default Button;

const styles = StyleSheet.create({
	button: {
		height: 70,
		width: 70,
		borderRadius: 10,
		padding: 0,
		alignItems: "center",
		justifyContent: "center",
	},
});
