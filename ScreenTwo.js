import React from 'react';
import { StyleSheet, Text, View, Button, TextInput} from 'react-native';

import AsyncStorage from '@react-native-community/async-storage';

export default function ScreenTwo() {

    const [note, setNote] = React.useState('');
    const [key, setKey] = React.useState('');
    const [value, setValue] = React.useState('');

    const saveValue = () => {
      if (note) {
        AsyncStorage.setItem(key, note);
        setNote('');
        alert('Note created');
      } else {
        alert('Please fill the blank spaces');
      }
    }

    const getValue = () => {
      AsyncStorage.getItem(key)
      .then((value) => {
        setValue(value);
      })
    }
  
    return (
      
      <View style={styles.container}>
        <Text>Create a new note.</Text>
  
        <Text>Type your note here: </Text>
  
        <TextInput 
          style={styles.input}
          placeholder="e.g: My secret information"
          onChangeText={(text) => setNote(text)}
        />

        <Text>Type the key to access your note: </Text>

        <TextInput 
          style={styles.input}
          placeholder="key16@"
          onChangeText={(text) => setKey(text)}
        />
  
        <Button 
        title="Create note"
        onPress={saveValue}
        />
  
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
      height: 25,
      borderColor: 'gray',
      borderWidth: 1,
   
    },
  });
  