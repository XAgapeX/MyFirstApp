import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pierwsza aplikacja w React Native</Text>
      <Text style={styles.subtitle}>Zadanie 1</Text>
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
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#222',
  },
  subtitle: {
    fontSize: 18,
    color: '#555',
    marginTop: 10,
  },
});

export default App;
