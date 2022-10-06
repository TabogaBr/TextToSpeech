import { Button, StyleSheet, TextInput, View } from 'react-native';
import { useState } from 'react';
import * as Speech from 'expo-speech';

export default function App() {

  const [text, setText] = useState('');

  const speak = () => {
    Speech.speak(text, { language: 'en' });
  }

  return (
    <View style={styles.container}>
      <TextInput style={styles.input}
        placeholder="To Hear"
        onChangeText={text => setText(text)}
        value={text} />
      <Button title="PRESS TO HEAR TEXT" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    width: 200,
    height: 40,
  },
});
