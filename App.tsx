import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [visible, setVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Zadanie 2</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => setVisible(!visible)}
      >
        <Text style={styles.buttonText}>
          {visible ? 'Ukryj' : 'Pokaż'}
        </Text>
      </TouchableOpacity>

      {visible && (
        <Text style={styles.text}>
          Nazywam się <Text style={{ fontWeight: 'bold' }}>Katarzyna Mierzyńska</Text>
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F0FF',
  },
  header: {
    fontSize: 28,
    marginBottom: 30,
    fontWeight: '600',
    color: '#222',
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 10,
    paddingHorizontal: 25,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 18,
    color: '#fff',
  },
  text: {
    fontSize: 20,
    color: '#000',
    marginTop: 25,
  },
});

export default App;
