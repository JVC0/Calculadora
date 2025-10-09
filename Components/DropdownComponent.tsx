import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
  
  const DropdownComponent = () => {
    const [tema, setTema] = useState("Lightheme");
    return (
      <select style={styles.dropdown} value={tema} onChange={e => setTema(e.target.value)}>
        <option value={"Lightheme"}>Tema claro</option>
        <option value={"Darktheme"}>Tema oscuro</option>
        <option value={"Colors"}>Tema Colorido</option>
      </select>
    );
  };

  export default DropdownComponent;

  const styles = StyleSheet.create({
    dropdown: {
      margin: 16,
      height: 50,
      backgroundColor: 'white',
      borderRadius: 12,
      padding: 12,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,
      elevation: 2,
    }
  });