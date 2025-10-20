import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('0');
  const [operator, setOperator] = useState<string | null>(null);
  const [previousValue, setPreviousValue] = useState<number | null>(null);

  const handlePress = (value: string | number) => {
    if (input === '0') {
      setInput(String(value));
    } else {
      setInput(input + String(value));
    }
  };

  const handleOperator = (op: string) => {
    setOperator(op);
    setPreviousValue(parseFloat(input));
    setInput('0');
  };

  const clear = () => {
    setInput('0');
    setOperator(null);
    setPreviousValue(null);
  };

  const calculate = () => {
    const current = parseFloat(input);
    if (operator && previousValue !== null) {
      let result = 0;
      switch (operator) {
        case '+':
          result = previousValue + current;
          break;
        case '-':
          result = previousValue - current;
          break;
        case '×':
          result = previousValue * current;
          break;
        case '÷':
          result = current !== 0 ? previousValue / current : 0;
          break;
        default:
          return;
      }
      setInput(String(result));
      setOperator(null);
      setPreviousValue(null);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.display}>
        <Text style={styles.displayText}>{input}</Text>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, styles.gray]} onPress={clear}>
          <Text style={styles.buttonText}>AC</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.olive]} onPress={() => handleOperator('÷')}>
          <Text style={styles.buttonText}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {[7, 8, 9].map((n) => (
          <TouchableOpacity key={n} style={styles.button} onPress={() => handlePress(n)}>
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.olive]} onPress={() => handleOperator('×')}>
          <Text style={styles.buttonText}>×</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {[4, 5, 6].map((n) => (
          <TouchableOpacity key={n} style={styles.button} onPress={() => handlePress(n)}>
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.olive]} onPress={() => handleOperator('-')}>
          <Text style={styles.buttonText}>−</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        {[1, 2, 3].map((n) => (
          <TouchableOpacity key={n} style={styles.button} onPress={() => handlePress(n)}>
            <Text style={styles.buttonText}>{n}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={[styles.button, styles.olive]} onPress={() => handleOperator('+')}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.row}>
        <TouchableOpacity style={[styles.button, { flex: 2 }]} onPress={() => handlePress(0)}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.button, styles.olive]} onPress={calculate}>
          <Text style={styles.buttonText}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    justifyContent: 'flex-end',
  },
  display: {
  backgroundColor: '#1C1C1C',
  padding: 20,
  alignItems: 'flex-end',
  justifyContent: 'flex-end',
  flex: 1,
  },
  displayText: {
    color: '#fff',
    fontSize: 60,
  },
  row: {
    flexDirection: 'row',
  },
  button: {
    flex: 1,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    height: 80,
    borderWidth: 0.5,
    borderColor: '#000',
  },
  gray: {
    backgroundColor: '#A5A5A5',
  },
  olive: {
  backgroundColor: '#98B44C',
  },
  buttonText: {
    color: '#fff',
    fontSize: 28,
  },
});

export default App;
