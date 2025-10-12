import Calculator from "@/Components/Calculator";
import { ThemeProvider} from "@/Components/ThemeContext";
import ThemeDropdown from "@/Components/DropdownComponent";
import { Stack } from "expo-router";

export default function Index() {
  return (
    <ThemeProvider>
      <Stack.Screen options={{ title: "Calculator" }} />
      <ThemeDropdown />
      <Calculator />
    </ThemeProvider>
  );
}