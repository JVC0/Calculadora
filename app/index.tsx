import Calculator from "@/Components/Calculator";
import DropdownComponent from "@/Components/DropdownComponent";
import { Colors, Darktheme, Lightheme } from "@/utils/Colors";
import { Stack } from "expo-router";
import { useState } from "react";

export default function Index() {
  const [tema, setTema] = useState(Lightheme);

  type TemaValue = "Lightheme" | "Darktheme" | "Colors";

  const handleTemaChange = (value: string) => {
      switch (value as TemaValue) {
      case "Lightheme":
            setTema(Lightheme);
            break;
          case "Darktheme":
            setTema(Darktheme);
            break;
          case "Colors":
            setTema(Colors);
            break;
          default:
          setTema(Lightheme);
      }
  };

  return (
    <>
    <Stack.Screen options={{ title: "Calculator" }} />
    <DropdownComponent onChangeTema={handleTemaChange} temas={tema} />
    <Calculator temas={tema}/>
    </>
  );
}
