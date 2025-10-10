import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

interface DropdownComponentProps {
  onChangeTema: (value: string) => void;
}

const DropdownComponent: React.FC<DropdownComponentProps> = ({ onChangeTema }) => {
    return (
    <select
      onChange={(e) => onChangeTema(e.target.value)}
      style={{
        margin: 16,
        height: 40,
        borderRadius: 8,
        padding: 8,
      }}
    >
      <option value="Lightheme">Tema Claro</option>
      <option value="Darktheme">Tema Oscuro</option>
      <option value="Colors">Tema Colorido</option>
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

