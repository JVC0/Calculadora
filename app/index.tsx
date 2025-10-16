import Calculator from "@/Components/Calculator";
import ThemeDropdown from "@/Components/DropdownComponent";
import { ThemeProvider } from "@/Components/ThemeContext";
import { Stack } from "expo-router";

export default function Index() {
	return (
		<ThemeProvider>
			<Stack.Screen options={{ title: "Calculator", headerShown: false }} />
			<ThemeDropdown />
			<Calculator />
		</ThemeProvider>
	);
}
