import React, { useState } from 'react';
import { Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useTheme } from './ThemeContext';

const ThemeDropdown = () => {
  const { theme, setTheme, colors } = useTheme();
  const [modalVisible, setModalVisible] = useState(false);

  const themes = [
    { label: 'Default', value: 'default' as const },
    { label: 'Light', value: 'light' as const },
    { label: 'Dark', value: 'dark' as const },
  ];

  const handleThemeSelect = (selectedTheme: typeof theme) => {
    setTheme(selectedTheme);
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.dropdownButton, { backgroundColor: colors.btnDark }]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={[styles.dropdownButtonText, { color: colors.white }]}>
          {themes.find(t => t.value === theme)?.label} ▼
        </Text>
      </TouchableOpacity>

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <TouchableOpacity
          style={styles.modalOverlay}
          activeOpacity={1}
          onPress={() => setModalVisible(false)}
        >
          <View style={[styles.modalContent, { backgroundColor: colors.light }]}>
            {themes.map((themeOption) => (
              <TouchableOpacity
                key={themeOption.value}
                style={[
                  styles.themeOption,
                  theme === themeOption.value && { backgroundColor: colors.gray }
                ]}
                onPress={() => handleThemeSelect(themeOption.value)}
              >
                <Text style={[styles.themeOptionText, { color: colors.black }]}>
                  {themeOption.label}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 50,
    right: 20,
    zIndex: 1000,
  },
  dropdownButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
  },
  dropdownButtonText: {
    fontSize: 14,
    fontWeight: '500',
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-start',
    paddingTop: 80,
    alignItems: 'flex-end',
    paddingRight: 20,
  },
  modalContent: {
    borderRadius: 8,
    padding: 8,
    minWidth: 120,
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  themeOption: {
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 4,
  },
  themeOptionText: {
    fontSize: 14,
  },
});

export default ThemeDropdown;